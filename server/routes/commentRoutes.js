const express = require('express');
const commentControllers = require('../controllers/commentControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(commentControllers.getAllComments).post(commentControllers.addNewComment);

router.route("/:id").get(commentControllers.getCommentById);

module.exports = router;