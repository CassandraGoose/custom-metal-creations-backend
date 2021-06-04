var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.post('/new-item', function(req, res, next) {
  queries.createItem(req.body).then(items => {
      res.json(items[0])
    }).catch((error) => next(error))
})

module.exports = router
