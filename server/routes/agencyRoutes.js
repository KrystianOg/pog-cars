const express = require('express');
const agencyControllers = require('../controllers/agencyControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(agencyControllers.getAllAgencies).post(agencyControllers.addNewAgency);

router.route("/:id").get(agencyControllers.getAgencyById);

module.exports = router;