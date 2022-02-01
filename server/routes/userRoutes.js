const express = require('express');
const userControllers = require('../controllers/userControllers')
const router = express.Router();

//@route GET && POST /cars
//router.route("/").get(userControllers.getAllUsers).post(userControllers.addNewUser);

router.get('/', userControllers.getNotDeleted);

router.get('/employees', userControllers.getAllEmployees);

router.get('/anchor=:anchor&amount=:amount', userControllers.getUsersWithAnchor);

router.route("/:id").get(userControllers.getUserById);

router.route("/id=:id").patch(userControllers.deleteUser)

router.route("/rate=:id").post(userControllers.rateAgent)
module.exports = router; 