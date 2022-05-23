const { Schema, model } = require('mongoose');

const FollowerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    following: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
})

module.exports = model('Follower', FollowerSchema);