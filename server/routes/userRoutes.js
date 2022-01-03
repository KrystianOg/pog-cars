const express = require('express');
const userControllers = require('../controllers/userControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(userControllers.getAllUsers).post(userControllers.addNewUser);

router.route("/:id").get(userControllers.getUserById);

module.exports = router;