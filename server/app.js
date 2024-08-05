const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require("cors")

//require routes
const indexRouter = require('./routes/index');
const usersRouters = require("./routes/user.routes")
const businessRouters = require("./routes/business.routes")
const revenueRouters = require("./routes/revenue.routes")
const expenditureRouters = require("./routes/expenditure.routes")
const budgetRouters = require("./routes/budget.routes")
const notificationRouters = require("./routes/notification.routes")
const reportRouters = require("./routes/report.routes")
const requisitionRouters = require("./routes/requisition.routes")
const subscriptionRouters = require("./routes/subscription.routes")
const subscriberRouters = require("./routes/subscriber.routes")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes handlers
app.use('/', indexRouter);
app.use("/v1/users",usersRouters)
app.use("/v1/business",businessRouters)
app.use("/v1/revenue",revenueRouters)
app.use("/v1/expenditure",expenditureRouters)
app.use("/v1/budget",budgetRouters)
app.use("/v1/notification",notificationRouters)
app.use("/v1/report",reportRouters)
app.use("/v1/requisition",requisitionRouters)
app.use("/v1/subscription",subscriptionRouters)
app.use("/v1/subscriber",subscriberRouters)

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
