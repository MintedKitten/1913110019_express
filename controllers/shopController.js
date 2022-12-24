const { shop } = require("../models/shop");
const { menu } = require("../models/menu");
const { join } = require("path");

const index = async (req, res, next) => {
  const shops = await shop.find().sort({ _id: "desc" });
  const shopsWithPhotoDomain = shops.map((shop) => {
    shop.photo = join(req.headers.host, "images", shop.photo);
    return {
      id: shop._id,
      name: shop.name,
      photo: shop.photo,
      location: shop.location,
    };
  });
  return res.status(200).json({ data: shopsWithPhotoDomain });
};

const getMenu = async (req, res, next) => {
  const menus = await menu.find();
  return res.status(200).json({ data: menus });
};

module.exports = { index: index, menu: getMenu };
