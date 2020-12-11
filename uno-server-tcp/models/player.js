const { model, Schema } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const PlayerSchema = new Schema({
    nickname: {
        type: String,
        required: [true, 'You need a nickname'],
        unique: true
    },
    auth: {
        type: String,
        required: [true, 'You need to be authenticated']
    }
})

PlayerSchema.plugin(uniqueValidator, { message: 'That nickname already exists. Choose another' })

module.exports = model('Player', PlayerSchema)
