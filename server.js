const express = require('express')
const recipeRouter = require('./router/recipeRouter')

const server = express()



server.use(express.json())
server.use('/api', recipeRouter)

module.exports = server