const { Schema, model } = require('mongoose');

const TweetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    message: {
        type: String,
        min: 1,
        max: 280,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Tweet',TweetSchema);