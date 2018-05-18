var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const bcrypt = require('bcrypt')
const knex = require('knex')

router.get('/', function(req, res, next) {
  res.json({
  message: 'okay'
  })
})

function validPerson(user) {
  const validName = typeof user.username === 'string'
  const validPassword = typeof user.password === 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;
  return validName && validPassword
}


router.post('/login', function(req, res, next) {
  if (validPerson(req.body)) {
    queries.getOneByUserName(req.body.username)
      .then(person => {
        if (person) {
          bcrypt.compare(req.body.password, person.password)
            .then(function(result) {
              if (result) {
                var isSecure = req.app.get('env') != 'development';
                res.cookie('person_id', person.id, {
                  httpOnly: true,
                  secure: isSecure,
                  signed: true
                })
                res.json({
                  message: 'Approved'
                })
              } else {
                next(new Error('invalid login'))
              }
            })
        } else {
          next(new Error('invalid login'))
        }
      })
  } else {
    next(new Error('Invalid Login'))
  }
})

router.get('/logout', (req, res, next) => {
  res.clearCookie('person_id')
  res.json({
    message: 'cookie cleared'
  })
})

module.exports = router;
