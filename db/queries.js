const knex = require('./knex')

module.exports = {
  getAll() {
    return knex('people');
  },
  getAllPosts() {
    return knex('post');
  },
  getOne(id) {
    return knex('post').where('id', id).first();
  },
  getOneByEmail(email) {
    return knex('me').where('email', email).first()
  },
  createPost(post) {
    return knex('post').insert(post, '*');
  },
  update(id, post) {
    return knex('post').where('id', id).update(post, '*');
  },
  delete(id) {
    return knex('post').where('id', id).del();
  },
  createAsk(ask) {
    return knex('ask').insert(ask, '*')
  }
}
