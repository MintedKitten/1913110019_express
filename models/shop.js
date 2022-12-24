const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, requied: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: { lat: { type: Number }, lgn: { type: Number } },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    virtuals: {
      menus: {
        options: { ref: "Menu", localField: "_id", foreignField: "shopId" },
      },
    },
  }
);

// shopSchema.virtual("menus", {
//   ref: "Menu",
//   localField: "_id",
//   foreignField: "shopId",
// });

const shop = mongoose.model("Shop", shopSchema, "shops");

module.exports = { shop: shop };
