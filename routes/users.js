const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.index);

router.get("/bio", userController.bio);

module.exports = router;
