const express = require("express");
const router = express.Router();
const {
  index,
  bio,
  register,
  login,
  profile,
} = require("../controllers/userController");
const { body } = require("express-validator");
const { isLogin } = require("../middleware/passwordJWT");

router.get("/", index);
router.get("/bio", bio);
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name cannot be empty"),
    body("email")
      .not()
      .isEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Email is not correctly formatted"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password cannot be empty")
      .isLength({ min: 5 })
      .withMessage("Password length must be as least 5 characters"),
  ],
  register
);
router.post(
  "/login",
  [
    body("email")
      .not()
      .isEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Email is not correctly formatted"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password cannot be empty")
      .isLength({ min: 5 })
      .withMessage("Password length must be as least 5 characters"),
  ],
  login
);
router.get("/me", [isLogin], profile);

module.exports = router;
