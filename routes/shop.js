const express = require("express");
const router = express.Router();
const {
  index,
  getMenu,
  getShop,
  addShop,
} = require("../controllers/shopController");

router.get("/", index);
router.get("/menu", getMenu);
router.get("/:id", getShop);
router.post("/", addShop);

module.exports = router;
