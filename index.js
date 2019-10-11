const server = require('./server.js')

const PORT = process.env.PORT || 7001

server.listen(PORT, () => console.log(`listening on ${PORT}`))