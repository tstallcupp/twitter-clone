// Access the Passport library (module)
const passport = require('passport');
// STRATEGY
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Require the user model
const User = require('../models/user');

//* configuring passport
passport.use(new GoogleStrategy(
    // Configuration object
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    // Verify callback function
    async function (accessToken, refreshToken, profile, cb) {
        // A user has logged in with OAuth
        try {
            // find the user google id through the provided profile.id & assign to LET so it can be updated if needed
            let user = await User.findOne({ googleId: profile.id });
            // Existing User found, so provide it to passport
            if (user) return cb(null, user);
            // We have a new user via OAuth
            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
});