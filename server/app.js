//require .env file reading
require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { auth } = require('express-oauth2-jwt-bearer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); //?
var carRouter = require('./routes/carRoutes');
var otherRouter = require('./routes/otherRoutes');


const port = process.env.PORT || 3000;

var app = express();

//APIs
//const twilio = require('./api/twilio.js')
//const mailgun = require('./api/mailgun.js')
//const auth0 = require('./api/auth0.js')
//const paypal = require('./api/paypal.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // maybe this has to be commented out

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// use routes
//app.use('/index', indexRouter);
app.use('/users',require('./routes/userRoutes'));
app.use('/agencies',require('./routes/agencyRoutes'));
app.use('/articles',require('./routes/articleRoutes'));
app.use('/car_articles',require('./routes/car_articleRoutes'));
app.use('/car_reviews',require('./routes/car_reviewRoutes'));
app.use('/cars',require('./routes/carRoutes'));
app.use('/comments',require('./routes/commentRoutes'));
app.use('/discounts',require('./routes/discountRoutes'));
app.use('/log',require('./routes/logRoutes'));
app.use('/register_codes',require('./routes/register_codeRoutes'));
app.use('/rental_history',require('./routes/rental_historyRoutes'));
app.use('/other', require('./routes/otherRoutes'));


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

//auth0
const checkJwt = auth({
  audience: 'YOUR_API_IDENTIFIER',
  issuerBaseURL: `http://localhost:3000/`,
});

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)

  //mailgun.sendWelcomeMessage('uzytkownik451@gmail.com') // testing sending mail messages
  //twilio.sendToMe('Test message') //testing sending phone messages
});

module.exports = app;
