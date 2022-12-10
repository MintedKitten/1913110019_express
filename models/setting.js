const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingSchema = new Schema(
  {
    name: String,
    address: {
      province: String,
    },
  },
);

const setting = mongoose.model("Setting", settingSchema, "setting");

module.exports = { setting: setting };
