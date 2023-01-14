const express = require("express");
const router = express.Router();
const { index, bio, register } = require("../controllers/userController");

router.get("/", index);
router.get("/bio", bio);
router.post("/", register);

module.exports = router;
