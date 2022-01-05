const express = require('express');
const car_reviewControllers = require('../controllers/car_ReviewControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(car_reviewControllers.getAllCarReviews).post(car_reviewControllers.addNewCarReview);

router.route("/:id").get(car_reviewControllers.getCarReviewById);

module.exports = router;