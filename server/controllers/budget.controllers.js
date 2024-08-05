const {Budget, User, Business} = require("../models")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(Budget),

  createOne: async (req, res) => {
    
    try {
        const {user_id, business_id} = req.body

        const user = await User.findOne({ where: { id: user_id } });
        if(!user) { return res.status(404).json({type: "user", message: "User doesn't exist." })}

        const business = await Business.findOne({ where: { id: business_id } });
        if(!business) {return res.status(404).json({type: "business", message: "Business doesn't exist." })}

        const budget = await Budget.create({id: uuid(), ...req.body});
        await budget.save()

        res.status(201).json({
          type: "success",
          message: "Budget created successfully.",
          budget
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

