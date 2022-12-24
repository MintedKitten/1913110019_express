const express = require("express");
const router = express.Router();
const { index, menu } = require("../controllers/shopController");

router.get("/", index);
router.get("/menu", menu);

module.exports = router;
