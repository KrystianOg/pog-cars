const express = require('express');
const rental_historyControllers = require('../controllers/rental_historyControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(rental_historyControllers.getAllRentalHistory)

router.route("/rental=:id").get(rental_historyControllers.getRentalHistoryById);

router.route("/user=:id").get(rental_historyControllers.getRentalHistoryByUserId);

module.exports = router;