const express = require("express")
const router = express.Router()
const controller = require("../controllers/report.controllers")

router.get("/", (req, res) =>  res.send("report route working!"))
router.get("/all", controller.findAll)
router.get("/biz/:uuid", controller.findByBiz)
router.get("/user/:uuid", controller.findByUser)
router.get("/date/:date", controller.findByDate)
router.get("/:uuid", controller.findOne)
router.post("/", controller.createOne)
router.put("/:uuid", controller.updateOne)
router.delete("/:uuid", controller.deleteOne)

module.exports = router 