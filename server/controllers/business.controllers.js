const {Business} = require("../models")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(Business),

  createOne: async (req, res) => {
    try {
        const newUrl = Date.now();
        const business = await Business.create({id: uuid(), ...req.body, url: newUrl});
        await business.save()
        res.status(201).json({
          success: true,
          message: "Business created successfully.",
          business
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

