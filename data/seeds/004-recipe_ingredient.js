
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1 },
        { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 7 },
        { id: 3, recipe_id: 2, ingredient_id: 3, quantity: 9 },
        { id: 4, recipe_id: 2, ingredient_id: 4, quantity: 6 },
        { id: 5, recipe_id: 2, ingredient_id: 1, quantity: 3 },

      ]);
    });
};
