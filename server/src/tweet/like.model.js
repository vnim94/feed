const { Schema, model } = require('mongoose');

const LikeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = model('Like', LikeSchema);