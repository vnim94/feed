const { Schema, model } = require('mongoose');

const FollowerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    follows: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
})

module.exports = model('Follower', FollowerSchema);