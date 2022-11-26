const express = require("express");
const router = express.Router();
const { company } = require("../controllers/companyController");

router.get("/", company);

module.exports = router;
