const express = require('express');
const agencyControllers = require('../controllers/agencyControllers')
const router = express.Router();

//router.use(validator)
//@route GET && POST /cars
router.route("/").get(agencyControllers.getAllAgencies).post(agencyControllers.addNewAgency);
router.route("/getnd").get(agencyControllers.getNotDeletedAgencies);

// might need some more stuff here later, since cars are left without an agency
//router.route("/").post(agencyControllers.removeAgency);

router.route("/:id").get(agencyControllers.getAgencyById);

module.exports = router;