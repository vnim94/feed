const { Schema, model } = require('mongoose');

const ReplySchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: Schema.Types.ObjectId,
        ref: 'onModel',
        required: true
    },
    onModel: {
        type: String,
        enum: ['Tweet', 'Reply'],
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