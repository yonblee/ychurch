const {User} = require("../models")
const bcrypt = require("bcrypt")
const { v4: uuid } = require("uuid");
const generic = require("./generic.controllers")

const controller = {
  ...generic(User),

  createOne: async (req, res) => {
    try {
        const {  password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({id: uuid(), ...req.body, password: hashedPassword });
        await user.save()
        res.status(201).json({
          success: true,
          message: "User created successfully.",
          user
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
    },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ 
        type: "email",
        message: "Account doesn't exist. "
       });
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(400).json(
      { 
        type: "password",
        message: "Password is Incorrect."
       }
    );
  
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = controller

