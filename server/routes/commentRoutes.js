const express = require('express');
const commentControllers = require('../controllers/commentControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/add").post(commentControllers.addNewComment);

router.route("/id=:id").get(commentControllers.getCommentById).patch(commentControllers.removeCommentById);

router.route("/article=:id").get(commentControllers.getCommentsByArticleId);
module.exports = router;