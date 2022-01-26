const express = require('express');
const authControllers = require('../controllers/auth');
const { route } = require('./userRoutes');
const router = express.Router();
const cors = require('cors')

//@ POST ROUTE
router.get('/login', function(req, res, next) {
    console.log(req.oidc.isAuthenticated());
    //req.oidc.lo
    res.status(201).json({message:"Login."});
});

router.get('/logout', function(req, res, next) {
    console.log(req.oidc.isAuthenticated());
    res.status(201).json({message:"Logout."});
});

router.route('/tempLogin=:id&type=:type').get(authControllers.tempLogin)

router.route('/tempLogout=:id').get(authControllers.tempLogout)

router.options('/register',cors())
router.route('/register').post(authControllers.register)

router.route('/checkAuth').get(authControllers.checkAuth)

router.route('/generateRegisterCode').post(authControllers.generateRegisterCode)

module.exports = router;