const { EventEmitter } = require('events')
const gameEvents = new EventEmitter()

gameEvents.once('newwaitroom', () => {

})

gameEvents.on('addPlayer', data => {

})

gameEvents.on('retiredPlayer', player => {

})

gameEvents.once('start', players => {

})

gameEvents.on('draw2', (currentPlayer, nextPlayer, players) => {

})

gameEvents.on('draw4', (currentPlayer, nextPlayer, players) => {

})

gameEvents.on('skip', players => {

})

gameEvents.on('reverse', (player, players) => {

})

gameEvents.on('uno', player => {

})

gameEvents.once('setwinner', player => {

})

gameEvents.on('badMove', message => {

})

gameEvents.on('error', message => {

})

module.exports = gameEvents
