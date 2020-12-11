require('dotenv').config({ silent: true })
const { createServer } = require('net')
const ctrl = require('./controllers')
const Server = require('./controllers/server')

// const server = createServer(ctrl)
const server = new Server(process.env.PORT)
server.init()

// server.listen(process.env.PORT, () => console.log(`Server port: ${ process.env.PORT }`))
