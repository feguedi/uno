const { Socket } = require('net')

/**
 * @param {Array<Socket>} clients Arreglo de clientes
 * @param {Socket} sender Remitente del mensaje
 * @param {Buffer} data Mensaje a enviar a los clientes
 */
const broadcast = (clients, sender, data) => {
    if (Array.isArray(clients)) {
        for (const client of clients) {
            if (client !== sender) {
                client.write(data)
            }
        }
    }
}

module.exports = broadcast
