const { Schema, model } = require('mongoose');

const MentionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mentioned: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: Schema.Types.ObjectId,
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

module.exports = model('Mention', MentionSchema);