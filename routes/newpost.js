var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.post('/', function(req, res) {
  queries.createPost(req.body).then(posts => {
      res.json(posts[0])
    })
})

module.exports = router
