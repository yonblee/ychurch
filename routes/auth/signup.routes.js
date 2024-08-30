var express = require("express");
const db = require("../../public/javascripts/db");
var router = express.Router();
var crypto = require("node:crypto");
var bcrypt = require("bcrypt");

router.get("/", function read(req, res, next) {
  res.render("signup", { title: "Sign up "});
});

router.post("/", function create(req, res, next) {
 
 let UUID = crypto.randomBytes(8).toString("hex").toUpperCase()
 let {fullname, contact, password} = req.body 
 const hashed = bcrypt.hashSync(password, 10)

 db.run("INSERT INTO users VALUES(?,?,?,?)", [UUID,fullname,contact,hashed], (err)=>{
      if(err) {
        next(err)
      } else {
        res.redirect("/login")
      }
    })
});

router.post("/verify", (req,res) => {
  console.log(req.body)
})

module.exports = router;
