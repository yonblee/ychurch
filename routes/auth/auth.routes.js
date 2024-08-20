var express = require("express");
var router = express.Router();

router.get("/", function getAuth(req, res, next) {
  res.send("auth is responding");
});
router.get("/login", function getAuth(req, res, next) {
  res.send("auth is responding");
});

module.exports = router;
