const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChirpHub' });
});

//* Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', 
  {
    scope: ['profile', 'email'],
    // optional
    prompt: 'select_account'
  }
));
//* Google Callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/'
  }
));
//* Logout Route
router.get('/logout', function(req, res) {
  req.logOut(function() {
    res.redirect('/');
  });
});

module.exports = router;
