const express = require("express")
const router = express.Router()
const controller = require("../controllers/expenditure.controllers")

router.get("/", (req, res) =>  res.send("expenditure route working!"))
router.get("/all", controller.findAll)
router.get("/:uuid", controller.findOne)
router.get("/user/:uuid", controller.findByUser)
router.get("/biz/:uuid", controller.findByBiz)
router.post("/", controller.createOne)
router.put("/:uuid", controller.updateOne)
router.delete("/:uuid", controller.deleteOne)

module.exports = router