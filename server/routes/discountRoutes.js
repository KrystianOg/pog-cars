const express = require('express');
const discountControllers = require('../controllers/discountControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/car=:id").post(discountControllers.addNewDiscount);

router.route("/code=:code").post(discountControllers.useDiscount);

router.route("/all").get(discountControllers.getAllDiscounted);

module.exports = router;