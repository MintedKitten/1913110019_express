const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, requied: true, trim: true },
  salary: { type: Number },
  created: { type: Date, default: Date.now() },
});

const staff = mongoose.model("Staff", staffSchema, "staff");

module.exports = { staff: staff };
