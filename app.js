var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const openAPI = require('./docs/openAPI');

var indexRouter = require('./routes/index');

var app = express();

//Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openAPI));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));

// DB Config
const db = require('./config/mongoDB').MongoURI;

// Connect to Mongo
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('MongoDB Connected..')).catch(err => console.log(err));

app.use('/', indexRouter);

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