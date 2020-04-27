var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', (req, res) => res.redirect('/symposia'));

router.get('/auth/google', passport.authenticate('google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate('google',{
    successRedirect: '/symposia/chronicle/',
    failureRedirect: '/symposia/'     
    })
);
   
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/symposia');
});

module.exports = router;
