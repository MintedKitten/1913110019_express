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
    let userinsert = new user();
    userinsert.name = name;
    userinsert.email = email;
    userinsert.password = password;
    await userinsert.save();
    return res.status(200).json({ message: "Register successful!" });
  } catch (e) {
    return res.status(404).json({ message: "Register Error" });
  }
};

module.exports = { index, bio, register };
