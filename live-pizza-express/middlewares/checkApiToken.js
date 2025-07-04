function checkApiToken(req, res, next) {

  console.log(req.headers);

  if (req.headers['fabio-token'] !== process.env.FABIO_TOKEN) {
    console.log('tell the user he is not authorized');
    return res.status(401).json({
      error: true,
      message: 'not authorized'
    })

  }

  next()
  console.log('You an move forward and process the request');


}



module.exports = checkApiToken