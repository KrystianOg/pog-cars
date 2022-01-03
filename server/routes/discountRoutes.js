const express = require('express');
const discountControllers = require('../controllers/discountControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(discountControllers.getAllDiscounts).post(discountControllers.addNewDiscount);

router.route("/:id").get(discountControllers.getDiscountById);

module.exports = router;