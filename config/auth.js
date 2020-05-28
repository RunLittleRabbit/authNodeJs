module.exports = {
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.status(401).send({});
  },
  forwardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
  },
};
