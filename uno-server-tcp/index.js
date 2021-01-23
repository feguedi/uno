require('dotenv').config({ silent: true })
const Server = require('./controllers/server')

const server = new Server(process.env.PORT)
server.init()
