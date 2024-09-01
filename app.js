require('module-alias/register');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
var session = require("express-session")
var SQLiteStore = require("connect-sqlite3")(session)
var indexRouter = require('./routes/index');
var loginRouter = require("./routes/auth/login.routes")
var signupRouter = require("./routes/auth/signup.routes")
var authRouter = require("./routes/auth/auth.routes");
const db = require('@js/db');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
  session({
    store: new SQLiteStore,
    secret: "RSTUVWXYZabcdefghijklmyz0123456789!@#$%^&*()_+[]{}|;:,.<>?",
    resave: true,
    saveUninitialized: false,
    cookie: { 
      secure: false, 
      // maxAge: 7*24*60*60*1000, //1 week
      maxAge: 60*60*1000, //1 hr
    },
  }));
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

//create DB Tables
db.serialize(() => {
    db.run(
        "CREATE TABLE IF NOT EXISTS users (UUID VARCHAR(50) NOT NULL, fullname VARCHAR(50) NOT NUll, email VARCHAR(50) NOT NUll UNIQUE, password VARCHAR(20) NOT NULL)"
    );

});


// ROUTES handler
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/auth', authRouter);


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
