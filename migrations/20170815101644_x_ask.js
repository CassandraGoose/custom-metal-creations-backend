
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('ask', function(table) {
      table.increments('id').primary()
      table.string('name')
      table.string('message')
      table.dateTime('create_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('ask')
};
