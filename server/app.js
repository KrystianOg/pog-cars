//require .env file reading
require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const { auth } = require('express-openid-connect'); // auth0

//const jwt = require('express-jwt'); //auth0...?
//const jwksRsa = require('jwks-rsa'); //auth0...?

const port = process.env.API_PORT || 5000;
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

//auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
};

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

//app.use(auth(config));

//session storage
app.use(session({secret: 'secret', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const corsOptions = {
  origin: '*',
  credentials: false,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

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
app.use('/auth',require('./routes/authRoutes'));

// catch 404 and forward to error handler
app.use((req, res, next) =>{
  next(createError(404));
});

app.get('/',(req,res,next) =>{
  console.log(req.body.Id)
  //if(req.body.Id)

  next()
})

app.post('/',(req,res,next) =>{
  console.log(req.body.Id)
  //if(req.body.Id)

  next()
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//which one to choose?

//auth0
/*const checkJwt = auth({
  audience: 'YOUR_API_IDENTIFIER',
  issuerBaseURL: `http://localhost:3000/`,
});
*/

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)
  
  //mailgun.sendWelcomeMessage('uzytkownik451@gmail.com') // testing sending mail messages
  //twilio.sendToMe('Test message') //testing sending phone messages
});

module.exports = app;
