const { Schema, model } = require('mongoose');

const ReplySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true
    },
    message: {
        type: String,
        minLength: 1,
        maxLength: 140,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    seen: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Reply', ReplySchema);