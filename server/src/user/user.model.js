const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 25,
        required: true
    },
    email: String,
    phone: String,
    username: {
        type: String,
        default: function() { return this.email.split('@')[0] }
    },
    password: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true
    },
    picture: String,
    header: String,
    bio: {
        type: String,
        mmaxLength: 160
    }
})

UserSchema.pre('save', function() {
    this.password = bcrypt.hashSync(this.password, 10);
})

module.exports = mongoose.model('User', UserSchema);
