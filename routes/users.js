var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
  const content = "demo page, url: "  + req.url;
  res.render("index", { title: content });
});

module.exports = router;
