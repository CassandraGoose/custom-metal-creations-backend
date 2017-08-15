
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('post', function(table) {
      table.increments('id').primary()
      table.string('title')
      table.string('img_url')
      table.string('feeling')
      table.text('text')
      table.dateTime('create_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('post')
};
