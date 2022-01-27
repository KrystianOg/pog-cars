const express = require('express');
const authControllers = require('../controllers/auth');
const { route } = require('./userRoutes');
const router = express.Router();
const cors = require('cors')

//@ POST ROUTE
router.post('/login', authControllers.login);

router.get('/logout', authControllers.logout);

//router.options('/register',cors())

router.route('/register').post(authControllers.register)

router.route('/checkAuth').get(authControllers.checkAuth)

router.route('/generateRegisterCode').get(authControllers.generateRegisterCode)

module.exports = router;