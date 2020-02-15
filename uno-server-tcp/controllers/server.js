const { createServer } = require('net')

class Server {
    constructor(port, address) {
        this.port = port || process.env.PORT
        this.address = address || '0.0.0.0'
    }

    init() {
        let server = this
        const onClientConnected = client => {
            let clientName = `${ client.remoteAddress }:${ client.remotePort }`

            client.on('data', data => {
                console.log(`${ clientName } dijo: ${ data }`)
                client.write(data)
                client.write('exit')
            })

            client.on('close', () => {
                console.log(`Conexión de ${ clientName } cerrada`)
            })

            client.on('error', err => {
                console.log(`Error en conexión ${ clientName }: ${ err.message }`)
            })
        }

        server.connection = createServer(onClientConnected)

        server.connection.listen(this.port, this.address, () => console.log(`Servidor iniciado en ${ this.port }`))
    }
}

module.exports = Server