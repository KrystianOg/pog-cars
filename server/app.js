//require .env file reading
require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const port = process.env.PORT || 3000;

var app = express();

//APIs
//const twilio = require('./api/twilio.js')
//const mailgun = require('./api/mailgun.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars',require('./routes/carRoutes'));

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Middlewares
app.use('/',()=>{

});

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)
  //mailgun.sendWelcomeMessage('tailowskikrystian@gmail.com') testing mail sending
  //twilio.sendToMe('Test message')
});

module.exports = app;
