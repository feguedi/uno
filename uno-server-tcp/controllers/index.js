const { Socket } = require('net')
const uuid = require('uuid/v4')
const broadcast = require('./broadcast')

let players = []

/**
 * Función principal
 * @param {Socket} player Socket del cliente que se va a conectar
 */
const init = player => {
    player.name = uuid()
    player.movements = []
    player.nickname = ''
    player.setEncoding('utf-8')
    players.push(player)

    player.write('Escriba su nickname: ')

    player.on('data', data => {
        switch (player.movements.length) {
            case 0:
                player.nickname = data.toString()
                player.movements.push(`Set nickname: ${ nickname }`)
                broadcast(players, player, `${ player.nickname } ha entrado a la partida`)
                break

            default:
                // TODO: agregar funciones del juego
                break
        }
    })
}

module.export = init
