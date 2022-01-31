const express = require('express');
const rental_historyControllers = require('../controllers/rental_historyControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").post(rental_historyControllers.getAllRentalHistory)

router.route("/rental=:id").post(rental_historyControllers.getRentalHistoryById);

router.route("/user=:id").post(rental_historyControllers.getRentalHistoryByUserId);

module.exports = router;