module.exports = {
  ensureAuthenticated(req, res, next) {
    console.log('logged in', req.isAuthenticated());
    if (req.user) {
      return next();
    }
    return console.log('error_msg', 'Please log in to view that resource');
    // res.redirect('/users/login');
  },
  forwardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    // res.redirect('/dashboard');
  },
};
