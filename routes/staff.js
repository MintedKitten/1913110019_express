const express = require("express");
const router = express.Router();
const {
  getstaff,
  poststaff,
  showstaff,
  removestaff,
  updatestaff,
} = require("../controllers/staffController");
const { body } = require("express-validator");

router.get("/", getstaff);
router.get("/:id", showstaff);
router.put("/:id", updatestaff);
router.delete("/:id", removestaff);
router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name cannot be empty."),
    body("salary")
      .not()
      .isEmpty()
      .withMessage("Salary cannot be empty.")
      .isNumeric()
      .withMessage("Salary must be a number"),
  ],
  poststaff
);

module.exports = router;
