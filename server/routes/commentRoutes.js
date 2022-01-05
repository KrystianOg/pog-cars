const express = require('express');
const commentControllers = require('../controllers/commentControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").post(commentControllers.addNewComment);

router.route("/:id").get(commentControllers.getCommentById).patch(commentControllers.removeCommentById);

module.exports = router;