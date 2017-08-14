const bcrypt = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  return knex('me').del()
    .then(function () {
      const salt = bcrypt.genSaltSync(saltRounds)

      const me = [
        {
          id: 47536,
          email: 'cassandra.torske@gmail.com',
          password: bcrypt.hashSync('deskTableCup4441', salt)
      }]
      return knex('me').insert(me)
    })
};
