const companies = [
  { id: 0, name: "TNI", address: { province: "Bangkok", postcode: "10250" } },
  { id: 1, name: "AIT", address: { province: "Bangkok", postcode: "10320" } },
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
