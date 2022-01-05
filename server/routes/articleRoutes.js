const express = require('express');
const articleControllers = require('../controllers/articleControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(articleControllers.getAllArticles).post(articleControllers.addNewArticle);



router.route("/:id").get(articleControllers.getArticleById).patch(articleControllers.removeArticleById);

module.exports = router;