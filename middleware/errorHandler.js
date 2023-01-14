function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({ message: err.message });
}
module.exports = { errorHandler };
