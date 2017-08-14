
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('me', function(table) {
    table.integer('id').primary()
    table.string('email')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('me')
};
