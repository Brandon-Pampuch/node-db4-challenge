
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { id: 1, recipes_id: 1, ingredients_id: 1, quantity: 1 },
        { id: 2, recipes_id: 1, ingredients_id: 2, quantity: 7 },
        { id: 3, recipes_id: 2, ingredients_id: 3, quantity: 9 },
        { id: 4, recipes_id: 2, ingredients_id: 4, quantity: 6 },
        { id: 5, recipes_id: 2, ingredients_id: 1, quantity: 3 },

      ]);
    });
};
