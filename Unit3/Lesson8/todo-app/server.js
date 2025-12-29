const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routers/todoRouter');
const authRouter = require('./routers/authRouter');
const session = require('express-session');
const passport = require('./config/passport');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// INITIALIZE EJS
app.set('view engine', 'ejs');

// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost:27017/todo-app')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

//take to login page on app root
app.use(express.static('public'));

// ROUTES
app.use('/todos', todoRouter);
app.use('/auth', authRouter);

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app };