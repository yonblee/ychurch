const {Subscriber, User, Business} = require("../models")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(Subscriber),

  createOne: async (req, res) => {
    
    try {
        const {user_id, business_id} = req.body

        const user = await User.findOne({ where: { id: user_id } });
        if(!user) { return res.status(404).json({type: "user", message: "User doesn't exist." })}

        const subscriber = await Subscriber.create({id: uuid(), ...req.body});
        await subscriber.save()

        res.status(201).json({
          type: "success",
          message: "Subscriber created successfully.",
          subscriber
        });

      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
    }
}

module.exports = controller

