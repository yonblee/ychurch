var express = require('express');
var router = express.Router();
var create = require("./new.church");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('church', { title: 'Church' });
});

router.get("/new", create)

module.exports = router;
