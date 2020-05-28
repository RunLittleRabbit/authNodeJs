const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');
const { ensureAuthenticated } = require('../config/auth');

// Register
router.post('/register', (req, res) => {
  const {
    name, email, password, password2,
  } = req.body;

  if (!name || !email || !password || !password2) {
    return res.status(400).send({
      status: 'failure',
      message: 'Please enter all fields',
    });
  }

  if (password !== password2) {
    return res.status(400).send({
      status: 'failure',
      message: 'Passwords do not match',
    });
  }

  if (password.length < 6) {
    return res.status(400).send({
      status: 'failure',
      message: 'Password must be at least 6 characters',
    });
  }


  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(409).send({
        status: 'failure',
        message: 'Email already exists',
      });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.status(200).send({
            status: 'success',
            message: 'You are now registered and can log in',
          }))
          .catch((err) => console.log(err));
      });
    });
  });
});

router.post('/login', forwardAuthenticated, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).send({
        status: 'failure',
        message: info.message,
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ name: user.name, email: user.email });
    });
  })(req, res, next);
});

// Logout
router.get('/logout', ensureAuthenticated, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
});

// get data
router.get('/getData', ensureAuthenticated, (req, res) => {
  User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data });
  });
});

module.exports = router;
