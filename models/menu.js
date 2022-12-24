const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: { type: String, requied: true, trim: true },
    price: { type: Number },
    shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
  },
  { timestamps: true }
);

const menu = mongoose.model("Menu", menuSchema, "menus");

module.exports = { menu: menu };
