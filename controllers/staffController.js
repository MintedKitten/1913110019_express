const { ObjectId } = require("bson");
const { staff } = require("../models/staff");

const get = async (req, res, next) => {
  const staffResult = await staff.find().sort({ _id: "desc" });
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

const show = async (req, res, next) => {
  try {
    const id = req.params.id;
    const staffResult = await staff.findOne({ _id: new ObjectId(id) });
    if (!staffResult) {
      throw new Error("No Staff found");
    }
    return res.status(200).json({ data: staffResult });
  } catch (e) {
    return res.status(404).end("Error: " + e.message);
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const staffResult = await staff.deleteOne({ _id: new ObjectId(id) });
    if (!staffResult.deletedCount) {
      throw new Error("No Staff delete");
    }
    return res.status(200).json({ data: staffResult });
  } catch (e) {
    return res.status(404).end("Error: " + e.message);
  }
};

const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, salary } = req.body;
    const staffupdate = await staff.updateOne(
      { _id: new ObjectId(id) },
      { name: name, salary: salary }
    );
    if (!staffupdate.modifiedCount) {
      throw new Error("No Staff was modified");
    }
    return res.status(200).json({ message: "Update Successful" });
  } catch (e) {
    return res.status(404).end("Error: " + e.message);
  }
};

module.exports = {
  staff: get,
  insert: post,
  show: show,
  remove: remove,
  update: update,
};
