const { ObjectId } = require("bson");
const { companies } = require("../models/companies");

// const company = async (req, res, next) => {
//   const companiesResult = await companies.findOne({ name: "HelloWorld Co." });

//   return res.status(200).json({ data: companiesResult });
// };

const showall = async (req, res, next) => {
  const result = await companies.find();
  return res.status(200).json({ data: result });
};

const showone = async (req, res, next) => {
  const { id } = req.params;
  const result = await companies.findOne({ _id: new ObjectId(id) });
  return res.status(200).json({ data: result });
};

const insert = async (req, res, next) => {
  const { name, address } = req.body;
  let compInsert = companies({ name: name, address: address });
  const result = await compInsert.save();
  console.log(result);
  return res
    .status(200)
    .json({ message: `Insert Successful: ${(result != null)}` });
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const result = await companies.updateOne(
      { _id: new ObjectId(id) },
      { name: name, address: address }
    );
    if (!result.modifiedCount) {
      throw new Error("No company was modified");
    }
    return res.status(200).json({ message: "Update Successful" });
  } catch (e) {
    return res.status(404).end(`Error: ${e.message}`);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await companies.deleteOne({ _id: new ObjectId(id) });
    if (!result.deletedCount) {
      throw new Error("No company was deleted");
    }
    return res.status(200).json({ data: result });
  } catch (e) {
    return res.status(404).end(`Error: ${e.message}`);
  }
};

module.exports = {
  getall: showall,
  getone: showone,
  insert: insert,
  update: update,
  remove: remove,
};
