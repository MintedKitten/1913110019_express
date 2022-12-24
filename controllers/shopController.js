const { shop } = require("../models/shop");

const index = async (req, res, next) => {
  const result = await shop.find();
  return res.status(200).json({ data: result });
};

module.exports = { index: index };
