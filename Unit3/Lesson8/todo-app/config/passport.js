// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user').User;
const crypto = require('crypto');

// define the local strategy for username-password authentication
passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
        const user = await User.findOne({ username: username });

        if (!user) {
            return cb(null, false, { message: 'Incorrect username.' });
        }

        crypto.pbkdf2(password, Buffer.from(user.passworldSalt, 'base64'), 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(Buffer.from(user.hashedPassword, 'base64'), hashedPassword)) {
                return cb(null, false, { message: 'Incorrect password.' });
            }
            return cb(null, user);
        });
        
        return cb(null, user);

    } catch (err) {
        return cb(err);
    }
}));


// Required for sessions
passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(async function (id, cb) {
    try {
        const user = await User.findById(id);   // returns a Promise now
        cb(null, user);
    } catch (err) {
        cb(err);
    }
});

module.exports = passport;
