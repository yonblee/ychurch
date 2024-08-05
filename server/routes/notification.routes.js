const express = require("express")
const router = express.Router()
const controller = require("../controllers/notification.controllers")

router.get("/", (req, res) =>  res.send("notification route working!"))
router.get("/all", controller.findAll)
router.get("/biz/:uuid", controller.findBiz)
router.get("/user/:uuid", controller.findByUser)
router.get("/:uuid", controller.findOne)
router.post("/", controller.createOne)
router.put("/:uuid", controller.updateOne)
router.delete("/:uuid", controller.deleteOne)

module.exports = router 