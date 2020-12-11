const { Schema, model } = require('mongoose')
const CardSchema = require('./card')

const colors = {
    values: ['red', 'green', 'blue', 'yellow', 'wildcard'],
    message: '{VALUE} it\'s not a valid color'
}

const GameSchema = new Schema({
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    players: [{
        player: {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        hand: [CardSchema]
    }],
    drawPile: {
        cards: [CardSchema]
    },
    discardPile: {
        cards: [CardSchema]
    },
    turn: {
        currentPlayer: {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        color: {
            type: String,
            enum: colors
        },
        number: {
            type: Number,
            min: 0,
            max: 9
        },
        startAt: {
            type: Date,
            required: function () {
                return !!this.settings.turnTime
            }
        },
        finishAt: {
            type: Date,
            required: function () {
                return !!this.settings.turnTime
            },
            default: function () {
                return !!this.settings.turnTime || this.startAt + this.settings.turnTime
            } 
        }
    },
    settings: {
        totalTime: {
            type: Number,
            max: 600,
            min: 150,
        },
        turnTime: {
            type: Number,
            max: 25,
            min: 10
        }
    }
}, {
    timestamps
})

module.exports = model('Game', GameSchema)
