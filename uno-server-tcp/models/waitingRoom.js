const { Schema, model } = require('mongoose')

const WaitRoomSchema = new Schema({
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player',
        unique: true
    }]
}, {
    timestamps
})

module.exports = model('WaitRoom', WaitRoomSchema)
