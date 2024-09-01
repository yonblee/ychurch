var router = require("express").Router();
var db = require("@js/db");

router.post("/email", function (req, res, next) {
    let {email} = req.body;
    let data = {}
    console.log(req.body);
    db.all("SELECT email FROM users WHERE email=?", [email], function (err, rows) {
        if(err) console.error(err);
        if(rows.length !== 0) {
            console.log(rows);
            data.email = email;
            res.json(data);
        } else {
            data.email = null;
            res.json(data);
        }
    })
});

module.exports = router;
