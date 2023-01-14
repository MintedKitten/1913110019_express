const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, requied: true, trim: true },
  email: { type: String, requied: true, trim: true, unique: true, index: true },
  password: { type: String, requied: true, trim: true, minlength: 5 },
  role: { type: String, requied: true, trim: true, default: "member" },
});

const user = mongoose.model("User", userSchema, "users");

module.exports = { user };
