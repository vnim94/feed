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
        ref: 'onModel',
        required: true
    },
    onModel: {
        type: String,
        enum: ['Tweet','Reply'],
        required: true
    }
})

module.exports = model('Mention', MentionSchema);