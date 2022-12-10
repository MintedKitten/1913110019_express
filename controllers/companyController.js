const { companies } = require("../models/companies");

// const companies = [
//   {
//     id: 0,
//     name: "Slack Technologies",
//     address: { province: "San Francisco, California", postcode: "94105" },
//   },
//   {
//     id: 1,
//     name: "Microsoft",
//     address: { province: "Redmond, Washington", postcode: "98052" },
//   },
//   {
//     id: 2,
//     name: "EXNET",
//     address: { province: "Nonthaburi", postcode: "11110" },
//   },
// ];

const company = async (req, res, next) => {
  const companiesResult = await companies.findOne({ name: "HelloWorld Co." });

  return res.status(200).json({ data: companiesResult });
};
module.exports = { company: company };
