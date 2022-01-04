var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bleh', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/al', function(req, res, next) {
  res.render('index', { title: 'Express post' });
});

// test
router.get('/cars', function(req, res, next) {
  res.render('index', { title: 'I love cars' });
});

// test
router.get('/cars/:allcars', function(req, res, next) {
  res.render('index', { title: 'I love cars' });
});

// test
router.get('/other', function(req, res, next) {
  res.render('index', { title: 'Different stuff' });
});


module.exports = router;
