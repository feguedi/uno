const Game = require('../models/game')
const Player = require('../models/player')
const WaitRoom = require('../models/waitRoom')

const newWaitRoom = async (firstPlayer) => {
    try {
        const waitRoom = new WaitRoom({ players: [firstPlayer] })
        await waitRoom.save()
    } catch (error) {
    }
}

const addPlayerToWaitRoom = async ({ idPlayer, game }) => {
    try {
        const waitRoom = await WaitRoom.find({ '_id': game })
        waitRoom.players.push(idPlayer)
        await waitRoom.save()
    } catch (error) {
    }
}

const removePlayerFromWaitRoom = async ({ nickname, game }) => {
    try {
    } catch (error) {
    }
}

const setNickname = async ({ nickname = undefined, auth = null }) => {
    try {
        if (!nickname || !auth) {
            return { message: 'Set a valid nickname' }
        }
        const player = new Player({ nickname, auth })
        await player.save()
    } catch (error) {
        return { message: error.message }
    }
}

const startAGame = async waitRoomId => {
    try {
        const players = await WaitRoom.findById(waitRoomId, 'players')
        const drawPile = []
        const game = new Game({ players })
        await game.save()
    } catch (error) {
    }
}

const firstTurn = async gameId => {
    try {
        const players = await Game.findById(gameId, 'players')
    } catch (error) {
    }
}

const updateTurn = async (gameId, { nextPlayer, color, number }) => {
    try {
        const turn = await Game.findById(gameId, 'turn')
    } catch (error) {
    }
}

const skip = async (gameId) => {
    try {
    } catch (error) {
    }
}

const reverse = async (gameId) => {
    try {
    } catch (error) {
    }
}

const drawCards = async (gameId) => {
    try {
    } catch (error) {
    }
}

const uno = async (gameId) => {
    try {
    } catch (error) {
    }
}

module.exports = {
    newWaitRoom,
    addPlayerToWaitRoom,
    removePlayerFromWaitRoom,
    setNickname,
    startAGame,
    firstTurn,
    updateTurn,
    drawCards,
    skip,
    reverse,
    uno
}
