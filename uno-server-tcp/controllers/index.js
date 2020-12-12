const Game = require('../models/game')
const Player = require('../models/player')
const WaitingRoom = require('../models/waitingRoom')
const pile = require('../utils/pile')
const { EventsError, shuffledPile } = require('../utils')

const newWaitingRoom = async (firstPlayer) => {
    try {
        const waitingRoom = new WaitingRoom({ players: [firstPlayer] })
        await waitingRoom.save()
        return { message: 'Waiting room created' }
    } catch (error) {
        throw new EventsError(false, error.message)
    }
}

const addPlayerToWaitingRoom = async ({ idPlayer, game }) => {
    try {
        const waitingRoom = await WaitingRoom.find({ '_id': game })
        waitingRoom.players.push(idPlayer)
        await waitingRoom.save()
    } catch (error) {
    }
}

const removePlayerFromWaitingRoom = async ({ nickname, game }) => {
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
        return { message: 'Now you have a nickname to play' }
    } catch (error) {
        throw new EventsError(false, error.message)
    }
}

const startAGame = async waitingRoomId => {
    try {
        const players = await WaitingRoom.findById(waitingRoomId, 'players')
        const drawPile = shuffledPile(shuffledPile(pile))
        const game = new Game({ players, drawPile })
        await game.save()
        return { message: 'Starting the game' }
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
        const game = await Game.findById(gameId)
        game.players.reverse()
        await game.save()
    } catch (error) {
    }
}

const drawCards = async (gameId) => {
    try {
    } catch (error) {
    }
}

const validateMove = async (gameId, playerNickname, card) => {
    try {
        const game = await Game.findById(gameId)
        const playerId = await Player.findOne({ 'nickname': playerNickname })
        const { currentPlayer, color: currentColor } = game.turn
        const currentNumber = game.turn?.number
        const lastAction = game.turn?.lastAction

        const cardNumber = card?.number
        const cardAction = card?.action
        const cardColor = card.color

        if (playerId !== currentPlayer) {
            throw new EventsError(false, 'Not a current player')
        }
        if (cardColor !== currentColor || cardNumber !== currentNumber || cardAction !== lastAction) {
            throw new EventsError(false, 'Neither color, action nor number match')
        }
    } catch (error) {
        throw new EventsError(false, error.message)
    }
}

const discard = async (gameId, playerNickname, card) => {
    try {
        const itsAPlayer = game.players.find(p => p._id === playerId)

        await validateMove(gameId, playerNickname, card)
        await updateTurn(gameId)
        
    } catch (error) {
        throw new EventsError(false, error.message)
    }
}

const uno = async (gameId) => {
    try {
    } catch (error) {
    }
}

module.exports = {
    newWaitingRoom,
    addPlayerToWaitingRoom,
    removePlayerFromWaitingRoom,
    setNickname,
    startAGame,
    firstTurn,
    updateTurn,
    drawCards,
    discard,
    skip,
    reverse,
    uno
}
