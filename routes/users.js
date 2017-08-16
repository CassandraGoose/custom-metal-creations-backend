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

router.post('/login', (req, res, next) => {
  if (req.body) {
    console.log(req.body);
    queries.getOneByEmail(req.body.email)
      .then(person => {
        if (person) {
          bcrypt.compare(req.body.password, person.password)
            .then((result) => {
              if (result) {
                res.json({
                  id: person.id,
                  message: 'ok'
                })
              } else {
                next(new Error('Invalid login'))
              }
            })
        } else {
          next(new Error('Invalid login'))
        }
      })
  } else {
    next(new Error('Invalid login'))
  }
})

module.exports = router;
