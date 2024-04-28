var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Java' });
});

router.get('/clock', function(req, res, next) {
  res.render('clock', { title: 'PWA Clock' });
});

module.exports = router;
