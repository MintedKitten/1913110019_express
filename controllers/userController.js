const index = (req, res, next) => {
  return res.status(200).json({ fullname: "Korndanai" });
};

const bio = (req, res, next) => {
  return res.status(200).json({
    fullname: "Korndanai Ananjinda",
    nickname: "Sky",
    hobby: "Listening to Music",
    gitusername: "MintedKitten",
  });
};

module.exports = { index: index, bio: bio };
