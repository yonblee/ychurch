var express = require("express");
const db = require("../public/javascripts/db");
var router = express.Router();


router.get("/", function read(req, res, next) {
  res.render("register", { title: "Register" });
});

router.post("/", function create(req, res, next) {

  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,UUID VARCHAR(50) NOT NULL, fullname VARCHAR(50) NOT NUll, email VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL)"
  );

  try {
    db.run("INSERT INTO users VALUES(?,?,?,?,?)", [null,UUID,fullname,email,password], function cb(err){

    })
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
