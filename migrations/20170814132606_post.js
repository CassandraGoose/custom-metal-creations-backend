
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('item', function(table) {
      table.increments('id').primary()
      table.string('title')
      table.string('img_url')
      table.text('description')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('item')
};
