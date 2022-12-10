const express = require("express");
const router = express.Router();
const {
  staff,
  insert,
  show,
  remove,
  update,
} = require("../controllers/staffController");

router.get("/", staff);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/", insert);

module.exports = router;
