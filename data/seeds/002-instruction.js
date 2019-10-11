
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, title: 'how to cook a burger', instructions: '1. grill 2.eat', recipes_id: 1 },
        { id: 2, title: 'how to bake a pie', instructions: '1. put in window', recipes_id: 2 },
      ]);
    });
};
