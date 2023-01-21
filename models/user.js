const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, requied: true, trim: true },
    email: {
      type: String,
      requied: true,
      trim: true,
      unique: true,
      index: true,
    },
    password: { type: String, requied: true, trim: true, minlength: 5 },
    role: { type: String, requied: true, trim: true, default: "member" },
  },
  {
    methods: {
      async encryptPassword(password) {
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
      },
      async checkPassword(password) {
        const isValid = await bcrypt.compare(password, this.password);
        return isValid;
      },
    },
  }
);

// userSchema.methods.encryptPassword = async function (password) {
//   const salt = await bcrypt.genSalt(5);
//   const hashPassword = await bcrypt.hash(password, salt);
//   return hashPassword;
// };

// userSchema.methods.checkPassword = async function (password) {
//   const isValid = await bcrypt.compare(password, this.password);
//   return isValid;
// };

const user = mongoose.model("User", userSchema, "users");

module.exports = { user };
