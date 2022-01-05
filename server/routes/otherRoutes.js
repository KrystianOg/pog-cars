const express = require('express');
const otherControllers = require('../controllers/otherControllers')
const router = express.Router();

/*
// FAQ
router.route("/other").post(otherControllers.showFAQ);

// get FAQ page
router.get('/other', function(req, res, next) {
    res.render('other', { title: 'FAQ' });
  });
*/

router.get('/other', otherControllers.showFAQ);

module.exports = router;