var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.get('/', function(req, res) {
  knex('ask')
  .then(asks => {
    res.json(asks)
  })
})

module.exports = router
