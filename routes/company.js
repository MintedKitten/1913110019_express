const express = require("express");
const router = express.Router();
const {
  showall,
  showone,
  insert,
  update,
  remove,
} = require("../controllers/companyController");
const { isAdmin } = require("../middleware/checkAdmin");
const { isLogin } = require("../middleware/passwordJWT");

router.get("/", [isLogin, isAdmin], showall);
router.get("/:id", showone);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/", insert);

module.exports = router;
