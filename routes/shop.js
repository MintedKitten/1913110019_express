const express = require("express");
const router = express.Router();
const { index } = require("../controllers/shopController");

router.get("/", index);

module.exports = router;
