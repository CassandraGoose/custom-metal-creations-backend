function allowAccess(req, res, next) {
  if(req.headers.Authorization == 47536){
    next()
  } else {
    return res.status(401).json({message: 'Unauthorized user.'})
  }
  next()
}


module.exports = {
  allowAccess
}
