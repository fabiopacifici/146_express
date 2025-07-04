const notFound = (req, res, next) => {
  res.status(404).json({ err: true, message: 'not found' })
}


module.exports = notFound