const express = require('express');
const authControllers = require('../controllers/auth');
const { route } = require('./userRoutes');
const router = express.Router();

//@ POST ROUTE
router.route('/login').get(authControllers.login)
router.route('/tempLogin').get(authControllers.tempLogin)

router.route('/register').post(authControllers.register)

router.route('/checkAuth').get(authControllers.checkAuth)

router.route('/generateRegisterCode').post(authControllers.generateRegisterCode)
module.exports = router;