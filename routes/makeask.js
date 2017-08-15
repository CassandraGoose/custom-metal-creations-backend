var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.post('/', function(req, res) {
  queries.createAsk(req.body).then(asks => {
      res.json(asks[0])
    })
})

module.exports = router
