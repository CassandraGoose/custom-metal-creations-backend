var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.get('/posts', function(req, res) {
  knex('post')
  .then(posts => {
    res.json(posts)
  })
})

router.post('/post', function(req, res) {
  queries.createPost(req.body).then(posts => {
      res.json(posts[0])
    })
})

router.get('/asks', function(req, res) {
  knex('ask')
  .then(asks => {
    res.json(asks)
  })
})

router.post('/ask', function(req, res) {
  queries.createAsk(req.body).then(asks => {
      res.json(asks[0])
    })
})

module.exports = router;
