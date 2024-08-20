var express = require("express");
var router = express.Router();

router.get("/", function getReg(req, res, next) {
  res.render("register", { title: "Register" });
});

module.exports = router;
