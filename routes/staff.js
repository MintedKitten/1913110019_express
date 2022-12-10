const express = require("express");
const router = express.Router();
const { staff, insert } = require("../controllers/staffController");

router.get("/", staff);
router.post("/", insert);

module.exports = router;
