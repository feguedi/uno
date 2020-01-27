const colors = require('colors/safe')

/**
 * Renderizado para las cartas
 * @param {Array<{specifications: String[], joker: String, action: String}>} cards Cartas que hay por mostrar
 * @returns {String} String final de las cartas
 */
const render = cards => {
    let renderFinal = ''
    for (let i = 0; i < 4; i++) {
        cards.forEach(card => {
            if (!card.joker) {
                const [color, number] = card.specifications
                switch (i) {
                    case 0:
                        renderFinal += colors[color](' ╔════╗ ')
                        break
                    case 1:
                        renderFinal += colors[color](' ║    ║ ')
                        break
                    case 3:
                        renderFinal += colors[color](' ╚════╝ ')
                        break
                    case 2:
                        if (number) {
                            renderFinal += colors[color](` ║  ${ number } ║ `)
                        } else if (card.action) {
                            switch (card.action) {
                                case '+2':
                                    renderFinal += colors[color](' ║ +2 ║ ')
                                    break
                                case 'reverse':
                                    renderFinal += colors[color](' ║ ⥄  ║ ')
                                    break
                                case 'block':
                                    renderFinal += colors[color](' ║ 🗙  ║ ')
                                    break
                            }
                        }
                        break
                }
            } else {
                switch (i) {
                    case 0:
                        renderFinal += colors.black.bgWhite(' ╔════╗ ')
                        break
                    case 1:
                        if (card.joker === '+4') {
                            renderFinal += colors.black.bgWhite(' ║ +4 ║ ')
                        } else if (card.joker === 'shuffle') {
                            renderFinal += colors.black.bgWhite(' ║↻  ↺║ ')
                        } else {
                            renderFinal += colors.black.bgWhite(' ║    ║ ')
                        }
                        break
                    case 3:
                        renderFinal += colors.black.bgWhite(' ╚════╝ ')
                        break
                    case 2:
                        renderFinal += colors.black.bgWhite(' ║')
                        renderFinal += colors.red.bgWhite('█')
                        renderFinal += colors.blue.bgWhite('█')
                        renderFinal += colors.yellow.bgWhite('█')
                        renderFinal += colors.green.bgWhite('█')
                        renderFinal += colors.black.bgWhite('║ ')
                        break
                }
            }
        })
        renderFinal += '\n'
    }
    return renderFinal
}

const renderJokerNormal = str => {
    return colors.gre
}

module.exports = render