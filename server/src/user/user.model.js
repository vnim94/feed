const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 25,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 5,
        required: true
    }
})

UserSchema.pre('save', function() {
    this.password = bcrypt.hashSync(this.password, 10);
})

module.exports = mongoose.model('User', UserSchema);
