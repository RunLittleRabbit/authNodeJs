const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User');

// Register
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    if (!name || !email || !password || !password2) {
        return res.status(400).send({
            success: 'false',
            message: 'Please enter all fields'
        });
    }

    if (password !== password2) {
        return res.status(400).send({
            success: 'false',
            message: 'Passwords do not match'
        });
    }

    if (password.length < 6) {
        return res.status(400).send({
            success: 'false',
            message: 'Password must be at least 6 characters'
        });
    }

    else {
        User.findOne({ email: email }).then(user => {
            if (user) {
                return res.status(409).send({
                    success: 'false',
                    message: 'Email already exists'
                });

            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                return res.status(200).send({
                                    success: 'true',
                                    message: 'You are now registered and can log in'
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
});

router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
    res.end(`${req.user.username} logged in`);
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        // res.redirect('/products?' + req.user.username);
    });

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;