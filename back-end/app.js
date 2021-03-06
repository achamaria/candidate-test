var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const rugRouter = require('./routes/rugRouter'); // importing rugRouter

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');



const url = 'mongodb://localhost:27017/rugcopro'; // localhost mongo url with the db name "rugcopro"

// connection to mongodb
const connect = mongoose.connect(url);



connect.then((db) => {
    db = mongoose.connection;
    console.log("Connected correctly to the server.");
}, (err) => {
    console.log(err);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/rugs', rugRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
