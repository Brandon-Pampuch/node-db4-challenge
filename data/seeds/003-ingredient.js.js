
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, type: 'cheese' },
        { id: 2, type: 'beef' },
        { id: 3, type: 'apples' },
        { id: 4, type: 'crust' }
      ]);
    });
};
