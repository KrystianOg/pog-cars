const express = require('express');
const otherControllers = require('../controllers/otherControllers')
const router = express.Router();

// FAQ
router.route("/").post(otherControllers.showFAQ);


module.exports = router;