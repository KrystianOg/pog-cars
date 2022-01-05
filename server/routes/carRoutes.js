const express = require('express');
const carControllers = require('../controllers/carControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(carControllers.getAllCars).post(carControllers.addNewCar);

router.route("/:id").get(carControllers.getCarById);

router.route("/delete=:id").delete(carControllers.deleteCarById);
//router.route("/").get(carControllers.getAllCars);

router.route("/reserve=:id").post(carControllers.reserveCar);
module.exports = router;