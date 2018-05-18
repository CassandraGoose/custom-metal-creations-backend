
exports.seed = function(knex, Promise) {
  return knex.raw('delete from item; alter sequence item_id_seq restart with 3')
    .then(function () {

      const anItem = [
        {
          id: 1,
          title: 'Chameleon',
          img_url: 'https://imgur.com/ayqv3LP',
          description: 'Made from bike parts and old tools'
      }, {
        id: 2,
        title: 'Butterfly',
        img_url: 'https://imgur.com/BHwoMiG',
        description: 'Metal butterfly with jewels',
      }]
      return knex('item').insert(anItem)
    })
};
