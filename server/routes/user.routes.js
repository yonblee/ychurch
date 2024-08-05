const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controllers")

router.get("/", (req, res) =>  res.send("user route working!"))
router.get("/all", controller.findAll)
router.get("/:uuid", controller.findOne)
router.post("/", controller.createOne)
router.post("/login", controller.login)
router.put("/:uuid", controller.updateOne)
router.delete("/:uuid", controller.deleteOne)

module.exports = router