const companies = [
  {
    id: 0,
    name: "Slack Technologies",
    address: { province: "San Francisco, California", postcode: "94105" },
  },
  {
    id: 1,
    name: "Microsoft",
    address: { province: "Redmond, Washington", postcode: "98052" },
  },
  {
    id: 2,
    name: "EXNET",
    address: { province: "Nonthaburi", postcode: "11110" },
  },
];

const company = (req, res, next) => {
  return res.status(200).json({ data: companies });
};
module.exports = { company: company };
