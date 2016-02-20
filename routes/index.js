var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eat Application Landing Page' });
});

/* GET home page. */
router.get('/children', function(req, res, next) {
  res.render('children', { title: 'Eat Application Children' });
});

/* GET home page. */
router.get('/adults', function(req, res, next) {
  res.render('adults', { title: 'Eat Application Adults' });
});

/* GET home page. */
router.get('/address', function(req, res, next) {
  res.render('address', { title: 'Eat Application Address' });
});

/* GET home page. */
router.get('/income', function(req, res, next) {
  res.render('income', { title: 'Eat Application Income' });
});

/* GET home page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'Eat Application Terms' });
});

module.exports = router;
