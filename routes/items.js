var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

router.get('/', function(req, res, next) {
  queries.getAll()
  .then(items => {
    res.json(items)
  }).catch((error) => {
    next(error);
  });
})

module.exports = router
