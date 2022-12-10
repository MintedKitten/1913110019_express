const { companies } = require("../models/companies");

const company = async (req, res, next) => {
  const companiesResult = await companies.findOne({ name: "HelloWorld Co." });

  return res.status(200).json({ data: companiesResult });
};
module.exports = { company: company };
