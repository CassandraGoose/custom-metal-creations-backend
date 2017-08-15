
exports.seed = function(knex, Promise) {
  return knex.raw('delete from post; alter sequence post_id_seq restart with 2')
    .then(function () {

      const aPost = [
        {
          id: 1,
          title: 'this is a title',
          img_url: 'no image',
          feeling: 'butts',
          text: 'this is the first post'
      }]
      return knex('post').insert(aPost)
    })
};
