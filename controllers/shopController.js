const { shop } = require("../models/shop");
const { menu } = require("../models/menu");
const { join } = require("path");
const { ObjectId } = require("bson");

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

const getShop = async (req, res, next) => {
  const { id } = req.params;
  const shops = await shop.findOne({ _id: new ObjectId(id) }).populate("menus");
  return res.status(200).json({ data: shops });
};

const getMenu = async (req, res, next) => {
  // const menus = await menu.find().select("+name -price");
  const menus = await menu.find().populate("shopId");
  return res.status(200).json({ data: menus });
};

module.exports = { index: index, menu: getMenu, shop: getShop };
