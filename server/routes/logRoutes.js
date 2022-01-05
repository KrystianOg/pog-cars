const express = require('express');
const logControllers = require('../controllers/logControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(logControllers.getAllLogs).post(logControllers.addNewLog);

router.route("/:id").get(logControllers.getLogById);

module.exports = router;