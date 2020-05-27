const express = require('express');
const { forwardAuthenticated } = require('../config/auth');

const router = express.Router();

router.get('/', forwardAuthenticated, (req, res) => res.send('Welcome'));

module.exports = router;
