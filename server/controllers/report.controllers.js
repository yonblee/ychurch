const {Report, User, Business} = require("../models")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(Report),

  createOne: async (req, res) => {
    
    try {
        const {user_id, business_id} = req.body

        const user = await User.findOne({ where: { id: user_id } });
        if(!user) { return res.status(404).json({type: "user", message: "User doesn't exist." })}
        
        const business = await Business.findOne({ where: { id: business_id } });
        if(!business) { return res.status(404).json({type: "business", message: "Business doesn't exist." })}

        const filename = "report_" + Date.now() + ".pdf"
        const report = await Report.create({id: uuid(),filename, ...req.body});
        await report.save()

        res.status(201).json({
          type: "success",
          message: "Report created successfully.",
          report
        });

      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
  },

  findByBiz: async (req, res, next) => {
      try {
        const instance = await Report.findAll({ where: { business_id: req.params.uuid } });
        if (!instance) return res.status(404).json({ success: false, message: `No Business found.` });
        res.status(200).json({ success: true, data: instance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
      next();
  },
  
  findByUser: async (req, res, next) => {
      try {
        const instance = await Report.findAll({ where: { user_id: req.params.uuid } });
        if (!instance) return res.status(404).json({ success: false, message: `No User found.` });
        res.status(200).json({ success: true, data: instance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
      next();
  },

  findByDate: async (req, res, next) => {
      try {
        console.log(req.body.date)
        const instance = await Report.findAll({ where: { from: req.params.date } });
        if (!instance) return res.status(404).json({ success: false, message: `No Report found.` });
        res.status(200).json({ success: true, data: instance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
      next();
  }
}

module.exports = controller

