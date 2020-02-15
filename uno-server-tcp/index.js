require('dotenv').config({ silent: true })
const { createServer } = require('net')
const ctrl = require('./controllers')

const server = createServer(ctrl)

server.listen(process.env.PORT, () => console.log(`Server port: ${ process.env.PORT }`))
