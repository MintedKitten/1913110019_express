const express = require("express");
const router = express.Router();
const {
  getstaff,
  poststaff,
  showstaff,
  removestaff,
  updatestaff,
} = require("../controllers/staffController");

router.get("/", getstaff);
router.get("/:id", showstaff);
router.put("/:id", updatestaff);
router.delete("/:id", removestaff);
router.post("/", poststaff);

module.exports = router;
