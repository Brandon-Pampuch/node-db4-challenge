
exports.up = function (knex) {
    knex.schema.createTable('recipes', function (table) {
        table.increments();
        table.string('name');
    })
    knex.schema.createTable('instructions', function (table) {
        table.increments();
        table.string('name');
        table.string('instructions');
        table.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })
    knex.schema.createTable('ingredients', function (table) {
        table.increments();
        table.string('type');
    })
    knex.schema.createTable('recipe_ingredients', function (table) {
        table.increments();
        table.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        table.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
        table.integer('quantity')
    })
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')

}
