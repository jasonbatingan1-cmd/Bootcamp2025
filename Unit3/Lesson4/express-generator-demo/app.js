var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const booksRouter = require("./routes/books");


var app = express();

app.use(logger('dev'));//all using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mount the routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

module.exports = app;

const DB = [];
DB.push();
console.log(DB);