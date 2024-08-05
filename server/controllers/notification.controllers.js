const {Notification, User, Business} = require("../models")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(Notification),

  createOne: async (req, res) => {
    
    try {
        const {user_id, business_id} = req.body

        const user = await User.findOne({ where: { id: user_id } });
        if(!user) { return res.status(404).json({type: "user", message: "User doesn't exist." })}

        const notification = await Notification.create({id: uuid(), ...req.body});
        await notification.save()

        res.status(201).json({
          type: "success",
          message: "Notification created successfully.",
          notification
        });

      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
  },

  findBiz: async (req, res, next) => {
      try {
        const instance = await Notification.findAll({ where: { business_id: req.params.uuid } });
        if (!instance) return res.status(404).json({ success: false, message: `No Nofication found.` });
        res.status(200).json({ success: true, data: instance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
      next();
  }
}

module.exports = controller

