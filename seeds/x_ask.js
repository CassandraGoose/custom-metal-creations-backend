exports.seed = function(knex, Promise) {
  return knex.raw('delete from ask; alter sequence post_id_seq restart with 2')
    .then(function () {

      const anAsk = [
        {
          id: 1,
          name: 'Anon',
          message: 'Hey, how do you answer questions'
      }]
      return knex('ask').insert(anAsk)
    })
};
