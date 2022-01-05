const express = require('express');
const register_codeControllers = require('../controllers/register_codeControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").post(register_codeControllers.addNewRegisterCode);

router.route("/:id").delete(register_codeControllers.useRegisterCode);

module.exports = router;