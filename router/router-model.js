const db = require("./dbConfig")

module.exports = {
    find,
    findIngredientsByRecipe,
    getInstructions

}

function find() {
    return db('recipes')
}
function findIngredientsByRecipe(id) {
    return (
        db('recipe_ingredients')
            .join('recipes', 'recipes.id', 'recipe_ingredients.recipes_id')
            .where({ recipes_id: id })
            .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredients_id')
            .select('quantity', 'type')
    )
}