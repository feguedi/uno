const { EventEmitter } = require('events')
const gameEvents = new EventEmitter()
const waitingRoomEvents = new EventEmitter()

waitingRoomEvents.once('newWaitingRoom', () => {

})

waitingRoomEvents.on('addPlayer', data => {

})

waitingRoomEvents.on('retirePlayer', player => {

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

gameEvents.once('setWinner', player => {

})

gameEvents.on('badMove', message => {

})

gameEvents.on('error', message => {

})

module.exports = {
    gameEvents,
    waitingRoomEvents
}
