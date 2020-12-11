const { Schema } = require('mongoose')

const colors = {
    values: ['red', 'green', 'blue', 'yellow', 'wild'],
    message: '{VALUE} it\'s not a valid color'
}

const actions = {
    values: ['draw2', 'reverse', 'skip', 'draw4'],
    message: '{VALUE} it\'s not a valid action'
}

const CardSchema = new Schema({
    color: {
        type: String,
        enum: colors
    },
    action: {
        type: String,
        enum: actions
    },
    number: {
        type: Number,
        max: 9,
        min: 0
    }
})

module.exports = CardSchema
