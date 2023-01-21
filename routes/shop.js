const express = require("express");
const { body } = require("express-validator");
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
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name cannot be empty."),
    body("location.lat")
      .not()
      .isEmpty()
      .withMessage("Lat in Location cannot be empty.")
      .isNumeric()
      .withMessage("Lat in Location must be a number"),
    body("location.lgn")
      .not()
      .isEmpty()
      .withMessage("Lat in Location cannot be empty.")
      .isNumeric()
      .withMessage("Lat in Location must be a number"),
  ],
  addShop
);

module.exports = router;
