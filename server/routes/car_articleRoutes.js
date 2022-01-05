const express = require('express');
const car_articleControllers = require('../controllers/car_articleControllers')
const router = express.Router();

//@route GET && POST /cars
router.route("/").get(car_articleControllers.getAllCarArticles).post(car_articleControllers.addNewCarArticle);

router.route("/:id").get(car_articleControllers.getCarArticleById);

module.exports = router;