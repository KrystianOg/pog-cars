const express = require('express');
const carControllers = require('../controllers/carControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(carControllers.getAllCars).post(carControllers.addNewCar);

router.route("/id/:id").get(carControllers.getCarById).patch(carControllers.removeCarById);

//router.route("/").get(carControllers.getAllCars);

router.route("/filter").get(carControllers.filter);

router.route("/sort=:type").get(carControllers.sort);
module.exports = router;