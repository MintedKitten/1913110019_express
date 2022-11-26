const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.status(200).json({ fullname: "Korndanai" });
});

router.get("/bio", (req, res, next) => {
  return res
    .status(200)
    .json({
      fullname: "Korndanai Ananjinda",
      nickname: "Sky",
      hobby: "Listening to Music",
      gitusername: "MintedKitten",
    });
});

module.exports = router;
