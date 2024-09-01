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

router.post("/code", function (req, res, next) {
    let code = {};
    code.code  = Math.floor(100000 + Math.random() * 900000);
    code.email = req.body.email
    code.time = new Date()
    req.session.code = code 
    //TODO: SEND EMAIL USING NODEMAILER
    console.log(code)
    res.json(code)
})

router.post("/code/auth", function (req, res, next) {
    let SIX_MIN = 6*60*1000; //6 mins
    let {code, time, email} = req.body;
   if(req.session.code.time - new Date(time) < SIX_MIN) {
    if(req.session.code.code == code) {
        res.json({expire: false, validation: true})
    } else {
        res.json({expire: false, validation: false})
    }
} else {
       res.json({expire: true, validation: false})
   }
})

module.exports = router;
