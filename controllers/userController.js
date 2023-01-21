const { validationResult } = require("express-validator");
const { user } = require("../models/user");

const index = (req, res, next) => {
  return res.status(200).json({ fullname: "Korndanai" });
};

const bio = (req, res, next) => {
  return res.status(200).json({
    fullname: "Korndanai Ananjinda",
    nickname: "Sky",
    hobby: "Listening to Music",
    gitusername: "MintedKitten",
  });
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Input is incorrect");
      error.statusCode = 422;
      error.validation = errors.array();
      throw error;
    }

    const isEmailExist = await user.findOne({ email: email });
    if (isEmailExist) {
      const error = new Error("Register Error: Email already exists");
      error.statusCode = 405;
      throw error;
    }
    try {
      let userinsert = new user();
      userinsert.name = name;
      userinsert.email = email;
      userinsert.password = await userinsert.encryptPassword(password);
      await userinsert.save();
      return res.status(200).json({ message: "Register successful!" });
    } catch (e) {
      const error = new Error(`Register Error: ${e.message}`);
      error.statusCode = 405;
      throw error;
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { index, bio, register };
