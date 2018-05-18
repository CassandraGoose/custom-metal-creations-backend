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
  getOneByUserName(username) {
    return knex('people').where('username', username).first()
  },
  newItem(item) {
    return knex('item').insert(item, '*');
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
