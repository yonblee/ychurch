var express = require("express");
const db = require("../public/javascripts/db");
var router = express.Router();
var crypto = require("node:crypto");
var bcrypt = require("bcrypt");

router.get("/", function read(req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/", function create(req, res, next) {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (UUID VARCHAR(50) NOT NULL, fullname VARCHAR(50) NOT NUll, contact VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL)"
  );
 let UUID = crypto.randomBytes(8).toString("hex").toUpperCase()
 let {fullname, contact, password} = req.body 
 const hashed = bcrypt.hashSync(password, 10)
//  console.log(bcrypt.compareSync("12341234", hashed))

    db.run("INSERT INTO users VALUES(?,?,?,?)", [UUID,fullname,contact,hashed], function cb(err){
      if(err) {
        res.status(500).json({error:err})
      } else {
        console.log("new user created")
      }
    })
});

module.exports = router;
