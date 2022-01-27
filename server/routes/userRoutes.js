const express = require('express');
const userControllers = require('../controllers/userControllers')
const router = express.Router();

//@route GET && POST /cars
//router.route("/").get(userControllers.getAllUsers).post(userControllers.addNewUser);

router.get('/', userControllers.getAllUsers);

router.get('/anchor=:anchor&amount=:amount', userControllers.getUsersWithAnchor);

router.route("/:id").get(userControllers.getUserById);

router.route("/delete=:id").patch(userControllers.deleteUser)

router.route("/rate=:id").post(userControllers.rateAgent)
module.exports = router;