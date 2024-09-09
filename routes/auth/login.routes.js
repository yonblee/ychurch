var express = require("express");
var bcrypt = require("bcrypt");
const db = require("@js/db");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login", {title: "Log in"});
});

router.post("/", function (req, res, next) {
  let {email,password} = req.body
  db.all("SELECT * FROM users WHERE email=?", [email], (err, rows) => {
    console.log(rows[0])
     if(bcrypt.compareSync(password, rows[0].password)){
      req.session.users = rows[0]
      res.locals = rows[0]
      res.redirect("/dash")
     } else {
      console.error("Wrong credentials")
      res.locals.error = "Email or password is incorrect"
      res.locals.email = email
      res.locals.password = password
      res.render("login", {title: "Log in"});
     }
  })
});


module.exports = router;
