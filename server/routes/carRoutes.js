const express = require('express');
const carControllers = require('../controllers/carControllers')
const router = express.Router();
const cors = require('cors')

//@route GET && POST /cars
router.route("/").get(carControllers.getAllCars)

router.route("/add").post(carControllers.addNewCar);

router.route("/id=:id").get(carControllers.getCarById).patch(carControllers.removeCarById);

router.route("/delete=:id").delete(carControllers.removeCarById);

router.route("/rent=:id").post(carControllers.reserveCar);

router.route("/filter").post(carControllers.filter);

router.route("/sort=:type").get(carControllers.sort);

module.exports = router;