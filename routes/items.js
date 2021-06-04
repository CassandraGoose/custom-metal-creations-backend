var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.get('/', function(req, res, next) {
  console.log(req.body);
  knex('item')
  .then(items => {
    res.json(items)
  }).catch((error) => {
    next(error);
  });
})

module.exports = router
