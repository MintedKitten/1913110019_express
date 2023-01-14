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
  const { name, email, password } = req.body;
  try {
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
