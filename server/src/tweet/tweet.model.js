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
        minLength: 1,
        maxLength: 280,
        required: true
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Tweet',TweetSchema);