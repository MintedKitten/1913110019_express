const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companiesSchema = new Schema({
  name: String,
  address: {
    province: String,
    postcode: String,
  },
});

const companies = mongoose.model("Company", companiesSchema, "companies");

module.exports = { companies };
