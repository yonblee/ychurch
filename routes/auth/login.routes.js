var express = require("express");
const sqlite = require("../../sqlite");
var bcrypt = require("bcrypt");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login", {title: "Log in"});
});

router.post("/", function (req, res, next) {
  let {email,password} = req.body
  sqlite.all("SELECT * FROM users WHERE email=?", [email], (err, rows) => {
    console.log(rows)
     if(bcrypt.compareSync(password, rows[0].password)){
      res.redirect("/dash")
     } else {
      res.locals.error = "Email or password is incorrect"
      res.locals.email = email
      res.locals.password = password

      res.render("login", {title: "Log in"});
     }
  })
});


module.exports = router;
