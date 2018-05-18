
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('people', function(table) {
    table.integer('id').primary()
    table.string('username')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('people')
};
