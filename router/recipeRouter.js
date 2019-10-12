const express = require('express')
const recipes = require('./router-model');

const router = express.Router()

router.get('/recipes', (req, res) => {
    recipes.find()
        .then(schemes => {
            res.json(schemes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get('/recipes/:id/shoppingList', (req, res) => {
    const { id } = req.params
    console.log(id)
    recipes.findIngredientsByRecipe(id)
        .then(ing => {
            res.json(ing);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' });
        });
})

router.get('/recipes/:id/instructions', (req, res) => {
    const { id } = req.params
    console.log(id)
    recipes.findIngredientsByRecipe(id)
        .then(ing => {
            res.json(ing);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get ingredients' });
        });
})


module.exports = router