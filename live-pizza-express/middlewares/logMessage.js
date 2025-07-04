function logMessage(req, res, next) {
  console.log('I am a middleware');
  //req.fabio = 'Daje'
  next()
}

module.exports = logMessage