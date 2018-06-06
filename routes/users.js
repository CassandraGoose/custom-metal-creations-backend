var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const bcrypt = require('bcrypt')
const knex = require('knex')
const jwt = require('jsonwebtoken');

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
                jwt.sign(person, 'keyboard_cat', {}, (err, token) => {
                  if (err) return next(err);
                  res.json({ token });
              });
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
