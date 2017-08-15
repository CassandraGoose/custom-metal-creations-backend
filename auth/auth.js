function allowAccess(req, res, next) {
  if(req.person.id === 47536){
    next()
  } else {
    res.status(401)
    next(new Error('Un-Authorized'))
  }
  next()
}


module.exports = {
  allowAccess
}
