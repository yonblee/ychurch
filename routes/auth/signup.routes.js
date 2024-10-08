var express = require("express");
var router = express.Router();
var crypto = require("node:crypto");
var bcrypt = require("bcrypt");
const db = require("@js/db");

router.get("/", function read(req, res, next) {
  res.render("signup", { title: "Sign up "});
});

router.post("/", function create(req, res, next) {
 
 let UUID = crypto.randomBytes(8).toString("hex").toUpperCase()
 let {fullname, email, password} = req.body 
 const hashed = bcrypt.hashSync(password, 10)

 db.run("INSERT INTO users VALUES(?,?,?,?)", [UUID,fullname,email,hashed], (err)=>{
      if(err) {
        next(err)
      } else {
        res.redirect("/login")
      }
    })
});

router.get("/verify", (req,res) => {
  res.send("verification working")
})

module.exports = router;
