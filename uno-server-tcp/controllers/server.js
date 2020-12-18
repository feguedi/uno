const { createServer } = require('net')
const uuid = require('uuid/v4')

class Server {
    constructor(port, address) {
        this.port = port || 3030
        this.address = address || '0.0.0.0'
    }

    init() {
        this.connection = createServer(this.onClientConnected)
        require('../database/connection')
        this.connection.listen(this.port, this.address, () => console.log(`Server started at ${ this.port }`))
    }

    onClientConnected(client) {
        let clientName = `${ client.remoteAddress }:${ client.remotePort } - ${ uuid() }`

        client.on('data', data => {
            console.log(`${ clientName } dijo: ${ data }`)
            client.write(data)
            client.write('\nexit')
        })

        client.on('close', () => {
            console.log(`Conexión de ${ clientName } cerrada`)
        })

        client.on('error', err => {
            console.log(`Error en conexión ${ clientName }: ${ err.message }`)
        })
    }
}

module.exports = Server