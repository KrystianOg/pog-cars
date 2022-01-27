const express = require('express');
const discountControllers = require('../controllers/discountControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").post(discountControllers.addNewDiscount);

router.route("/code=:code").get(discountControllers.useDiscount);

router.route("/all").get(discountControllers.getAllDiscounted);

module.exports = router;