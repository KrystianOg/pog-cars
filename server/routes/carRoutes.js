const express = require('express');
const carCotrollers = require('../controllers/carControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(carCotrollers.getAllCars).post(carCotrollers.addNewCar);

router.route("/:id").get(carCotrollers.getCarById);

module.exports = router;