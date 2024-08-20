var express = require("express");
var router = express.Router();

router.get("/", function getAuth(req, res, next) {
  res.send("login is responding");
});

module.exports = router;
