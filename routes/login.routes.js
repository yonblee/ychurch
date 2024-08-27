var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login", {title: "Log in"});
});

router.post("/", function (req, res, next) {
  let {email,password} = req.body
});


module.exports = router;
