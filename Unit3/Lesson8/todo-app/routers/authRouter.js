const express = require('express');
const router = express.Router();
const { User } = require('../models/user.js');
const passport = require('passport');
const crypto = require('crypto');
const LocalStrategy = require('passport-local');

// Fetch All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong! Please try again later.', error: err.message });
    }
});

// User Registration
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already in use.' });
        }

        const salt = crypto.randomBytes(16).toString('base64');
        const hashedPassword = crypto.pbkdf2Sync(password, Buffer.from(salt, 'base64'), 310000, 32, 'sha256').toString('base64');
        const newUser = new User({ username, password: hashedPassword, passworldSalt: salt });
        const result = await newUser.save();
        res.status(201).json({ message: 'User registered successfully!', user: result });
    } catch (err) {
        res.status(500).json({ message: 'Error during registration. Please try again later.', error: err.message });
    }
});

//handle login post request
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth'
}));

//add logout route
router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;