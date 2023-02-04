const { validationResult } = require("express-validator");
const { user } = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

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
    // Check email
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

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Input is incorrect");
      error.statusCode = 422;
      error.validation = errors.array();
      throw error;
    }
    // Check user
    const isUserExist = await user.findOne({ email: email });
    if (!isUserExist) {
      const error = new Error("Login Error: Can't find this user");
      error.statusCode = 404;
      throw error;
    }
    // Check password
    const isValid = await isUserExist.checkPassword(password);
    if (!isValid) {
      const error = new Error("Login Error: Password is incorrect");
      error.statusCode = 401;
      throw error;
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: isUserExist._id,
      },
      JWT_SECRET,
      { expiresIn: "5 days" }
    );
    const expired_in = jwt.decode(token);

    return res.status(200).json({
      access_token: token,
      expired_in: expired_in.exp,
      token_type: "Bearer",
    });
  } catch (e) {
    next(e);
  }
};

const profile = async (req, res, next) => {
  const { role, name, email } = req.user;
  return res
    .status(200)
    .json({ data: { name: name, email: email, role: role } });
};

module.exports = { index, bio, register, login, profile };
