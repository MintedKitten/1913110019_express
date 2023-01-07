const express = require("express");
const router = express.Router();
const { index, menu, shop, insert } = require("../controllers/shopController");

router.get("/", index);
router.get("/menu", menu);
router.get("/:id", shop);
router.post("/", insert);

module.exports = router;
