const express = require('express');
const register_codeControllers = require('../controllers/register_codeControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(register_codeControllers.getAllRegisterCodes).post(register_codeControllers.addNewRegisterCode);

router.route("/:id").get(register_codeControllers.getRegisterCodeById);

module.exports = router;