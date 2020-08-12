

var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');

const loginCtrl = require('../controllers/blog-ctrl');
dotenv.config();

// Perform the login, after login Auto0 will redirect to callback
router.get('/login', loginCtrl.loginGetPassportAuth, loginCtrl.loginRedirect);

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', loginCtrl.loginCallback);

// Perform session logout and redirect to homepage
router.get('/logout', loginCtrl.logout);

module.exports = router;

