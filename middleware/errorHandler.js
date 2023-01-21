function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  if (err.validation) {
    return res.status(statusCode).json({
      status_code: statusCode,
      message: err.message,
      validation: err.validation,
    });
  } else {
    return res.status(statusCode).json({
      status_code: statusCode,
      message: err.message,
    });
  }
}

module.exports = { errorHandler };
