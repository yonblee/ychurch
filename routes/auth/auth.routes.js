var router = require("express").Router();
var db = require("@js/db");

router.post("/email", function (req, res, next) {
    let {email} = req.body;
    let data = {}
    db.all("SELECT email FROM users WHERE email=?", [email], function (err, rows) {
        if(err) console.error(err);
        if(rows.length !== 0) {
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
    res.json(code)
})

router.post("/verify", function (req, res, next) {
    let SIX_MIN = 6*60*1000; //6 mins
    let {code, time, email} = req.body;
    //TODO: SET EXPIRATION CHECK
    //TODO: SET CODE-TO-EMAIL CHECK
    if(req.session.code.code == code) {
        res.json({expire: false, valid: true, req: req.session.code.code, code })
    } else {
        res.json({expire: false, valid: false, req: req.session.code.code, code})
    }
})

module.exports = router;
