const { staff } = require("../models/staff");

const get = async (req, res, next) => {
  const staffResult = await staff.find();
  return res.status(200).json({ data: staffResult });
};

const post = async (req, res, next) => {
  const { name, salary } = req.body;
  let staffinsert = staff({ name: name, salary: salary });
  const result = await staffinsert.save();
  return res
    .status(200)
    .json({ message: "Insert Successful: " + (result != null) });
};

module.exports = { staff: get, insert: post };
