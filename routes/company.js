const express = require("express");
const router = express.Router();
const {
  getall,
  insert,
  update,
  remove,
  getone,
} = require("../controllers/companyController");

router.get("/", getall);
router.get("/:id", getone);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/", insert);

module.exports = router;
