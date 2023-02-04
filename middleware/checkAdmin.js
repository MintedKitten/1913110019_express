const isAdmin = async (req, res, next) => {
  const { role } = req.user;
  if (role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: { message: "Not authorized" } });
  }
};

module.exports = { isAdmin };
