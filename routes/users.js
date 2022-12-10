const express = require("express");
const router = express.Router();
const { index, bio } = require("../controllers/userController");

/* GET users listing. */
router.get("/", index);

router.get("/bio", bio);

module.exports = router;
