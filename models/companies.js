const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companiesSchema = new Schema(
  {
    name: String,
    address: {
      province: String,
      postcode: String,
    },
  },
  { collection: "setting" }
);

const company = mongoose.model("Company", companiesSchema);

module.exports = { companies: company };
