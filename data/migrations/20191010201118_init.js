
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', function (table) {
        table.increments();
        table.string('name', 128);
    })
        .createTable('instructions', function (table) {
            table.increments();
            table.string('title');
            table.string('instructions');
            table.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
        })
        .createTable('ingredients', function (table) {
            table.increments();
            table.string('type');
        })
        .createTable('recipe_ingredients', function (table) {
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
