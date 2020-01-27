/**
 * Ordenador de cartas
 * @param {Array<{specifications?: String[], joker?: String, action?: String}>} myHand Cartas en la mano
 * @param {{specifications?: String[], joker?: String, action?: String}} lastCard Objeto que describe la última carta
 * @returns {Array} Arreglo final de las cartas
 */
const sorter = (myHand, lastCard) => {
    let handSorted = myHand
    handSorted = sortByColor(handSorted, lastCard.specifications[0])
    handSorted.sort((a, b) => (a.specifications[0] === b.specifications[0]) ? 1 : (a.specifications[1] === b.specifications[1]) ? ((a.action > b.action) ? 1 : -1) : -1)
    return handSorted
}

/**
 * Ordenador de cartas por color
 * @param {Array<{specifications?: String[], joker?: String, action?: String}>} myHand Cartas en la mano
 * @param {String} color Color de la última carta
 * @returns {Array} Arreglo final de las cartas
 */
const sortByColor = (myHand, color) => {
    return myHand.sort((a, b) => a.specifications[0] === color)
}

/**
 * const list = [
 *     { color: 'white', size: 'XXL' },
 *     { color: 'red', size: 'XL' },
 *     { color: 'black', size: 'M' }
 *  ]
 *  list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )
 */

module.exports = sorter
