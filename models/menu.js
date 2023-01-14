const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: { type: String, requied: true, trim: true },
    price: { type: Number },
    shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
  },
  {
    timestamps: true,
    virtuals: {
      price_vat: {
        get() {
          return this.price * 1.07;
        },
      },
    },
    toJSON: { virtuals: true },
  }
);

// menuSchema.virtual("price_vat").get(function () {
//   return this.price * 1.07;
// });

const menu = mongoose.model("Menu", menuSchema, "menus");

module.exports = { menu };
