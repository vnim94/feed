const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let database;

exports.connect = async () => {
    database = await MongoMemoryServer.create();
    const uri = database.getUri();
    await mongoose.connect(uri);
}

exports.disconnect = async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
    await database.stop();
}

const User = require('../src/user/user.model');
const Tweet = require('../src/tweet/tweet.model');

exports.seed = async () => {
    const user = await User.create({
        name: 'John Smith',
        email: 'jsmith@email.com',
        phone: '0123456789',
        password: 'password'
    });

    await Tweet.create({
        user: user._id,
        message: 'This is a tweet',
    })
}
