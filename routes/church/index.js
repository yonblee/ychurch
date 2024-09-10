var express = require('express');
var router = express.Router();
var create = require("./create.church");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('church', { title: 'Church' });
});

router.get("/create", create)

module.exports = router;
