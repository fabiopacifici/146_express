function handleServerError(err, req, res, next) {
  res.status(500)
  console.log(err);
  console.log(err.stack);
  
  
  res.json({
    error: err.message,
  });
};

module.exports = handleServerError;