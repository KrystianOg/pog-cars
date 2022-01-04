var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.oidc.isAuthenticated());
  res.status(201).json({message:"Main site."});
});

router.get('/login', function(req, res, next) {
  console.log(req.oidc.isAuthenticated());
  req.oidc.lo
  res.status(201).json({message:"Login."});
});

router.get('/logout', function(req, res, next) {
  console.log(req.oidc.isAuthenticated());
  res.status(201).json({message:"Logout."});
});



module.exports = router;
