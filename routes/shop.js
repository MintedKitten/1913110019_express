const express = require("express");
const router = express.Router();
const { index, menu, shop } = require("../controllers/shopController");

router.get("/", index);
router.get("/menu", menu);
router.get("/:id", shop);

module.exports = router;
