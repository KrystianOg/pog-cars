const express = require('express');
const articleControllers = require('../controllers/articleControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").post(articleControllers.addNewArticle);
router.get('/anchor=:anchor&amount=:amount', articleControllers.getArticlesWithAnchor);

router.route("/:id").get(articleControllers.getArticleById).patch(articleControllers.removeArticleById);

module.exports = router;