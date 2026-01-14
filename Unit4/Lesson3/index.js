// Main server file: index.js

//Header files and required modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
//const books = require('./data/books.js'); //get books from static data file from data folder
const booksRouter = require('./routes/booksRouter.js');
const app = express();
const PORT = 3000;

console.log(">>> SERVER STARTED FROM:", __filename);


// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for method override to support PUT and DELETE from forms
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Unit4Lesson3')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

//display books from booksRouter on startup
app.use('/', booksRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});