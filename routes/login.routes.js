var express = require("express");
var router = express.Router();

router.get("/", function getAuth(req, res, next) {
  res.render("login", {title: "Log in"});
});


module.exports = router;
