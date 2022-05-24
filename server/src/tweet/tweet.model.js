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
}, {
    toJSON: { virtuals: true }
})

TweetSchema.virtual('replies', {
    ref: 'Reply',
    localField: '_id',
    foreignField: 'content',
    count: true
})

TweetSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'content',
    count: true
})

module.exports = model('Tweet',TweetSchema);