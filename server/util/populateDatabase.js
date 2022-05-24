#! /usr/bin/env node
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const async = require('async');

mongoose.connect(process.env.DATABASE);
const database = mongoose.connection;
database.once('open', () => console.log('[INFO] Successfully connected to database'));
database.on('error', console.error.bind(console, 'Error connecting to database'));

const User = require('../src/user/user.model');
const Tweet = require('../src/tweet/tweet.model');
const Like = require('../src/tweet/like.model');
const Reply = require('../src/tweet/reply.model');
const Mention = require('../src/tweet/mention.model');

let users = [];
let tweets = [];
let replies = [];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createUser(details, callback) {
    const user = new User(details);
         
    user.save((err) => {
        if (err) {
            console.log(`[ERROR] Error creating user: ${user.name} - ${err}`);
            callback(err, null);
            return;
        }

        console.log(`[INFO] New user created: ${user.name}`);
        users.push(user);
        callback(null, user);
    });
}

function createTweet(details, callback) {
    const tweet = new Tweet(details);

    tweet.save((err) => {
        if (err) {
            console.log(`[ERROR] Error creating tweet: ${tweet._id.toString()} - ${err}`);
            callback(err, null);
            return;
        }

        console.log(`[INFO] New tweet created: ${tweet._id.toString()}`);
        tweets.push(tweet);
        callback(null, tweet);
    })
}

function createLike(user, content, callback) {
    const like = new Like({ user, content });

    like.save((err) => {
        if (err) {
            console.log(`[ERROR] Error creating like: ${like._id.toString()} - ${err}`);
            callback(err, null);
            return;
        }

        console.log(`[INFO] New like created: ${like._id.toString()}`);
        callback(null, like);
    })
}

function createReply(details, callback) {
    const reply = new Reply(details);

    reply.save((err) => {
        if (err) {
            console.log(`[ERROR] Error creating reply: ${reply._id.toString()} - ${err}`);
            callback(err, null);
            return;
        }

        console.log(`[INFO] New reply created: ${reply._id.toString()}`);
        replies.push(reply);
        callback(null, reply);
    })
}

function createMention(details, callback) {
    const mention = new Mention(details);

    mention.save((err) => {
        if (err) {
            console.log(`[ERROR] Error creating mention: ${mention._id.toString()} - ${err}`);
            callback(err, null);
            return;
        }

        console.log(`[INFO] New mention created: ${mention._id.toString()}`);
        callback(null, mention);
    })
}

function populateUsers(callback) {
    const usersToCreate = [];

    for (let i = 0; i < 5; i++) {
        let details = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: 'password',
            picture: faker.image.avatar(),
            header: faker.image.imageUrl(),
            bio: faker.lorem.sentences(3)
        }
        usersToCreate.push(function(callback) { createUser(details, callback) });
    }

    async.series(usersToCreate, callback);
}

function populateTweets(callback) {
    const tweetsToCreate = [];

    for (let i = 0; i < 50; i++) {
        let details = {
            user: users[getRandomIndex(users.length)]._id,
            image: faker.image.imageUrl(),
            message: faker.lorem.sentences(3)
        }
        tweetsToCreate.push(function(callback) { createTweet(details, callback) });
    }

    async.series(tweetsToCreate, callback);
}

function populateReplies(callback) {
    const repliesToCreate = [];

    for (let i = 0; i < 75; i++) {
        let tweet = tweets[getRandomIndex(tweets.length)];
        let reply = replies[getRandomIndex(replies.length)];
        let content;
        Math.round(Math.random()) === 1 ? content = tweet._id : content = reply._id;

        let sender = users.find(user => user._id.toString() !== tweet.user.toString());

        let details = {
            from: sender,
            to: tweet.user,
            content, 
            message: faker.lorem.sentences(2)
        }
        repliesToCreate.push(function(callback) { createReply(details, callback) });
    }

    async.series(repliesToCreate, callback);
}

function populateLikes(callback) {
    const likesToCreate = [];

    for (let i = 0; i < 100; i++) {
        let tweet = tweets[getRandomIndex(tweets.length)];
        let reply = replies[getRandomIndex(replies.length)];
        let content;
        Math.round(Math.random()) === 1 ? content = tweet._id : content = reply._id;

        likesToCreate.push(function(callback) { createLike(users[getRandomIndex(users.length)], content) });
    }

    async.series(likesToCreate, callback);
}

function populateMentions(callback) {
    const mentionsToCreate = [];

    for (let i = 0; i < 75; i++) {
        let tweet = tweets[getRandomIndex(tweets.length)];
        let reply = replies[getRandomIndex(replies.length)];
        let content;
        Math.round(Math.random()) === 1 ? content = tweet._id : content = reply._id;

        let selectedUser = users[getRandomIndex(users.length)]._id;

        let details = {
            user: selectedUser,
            mentioned: users.find(user => user._id.toString() !== selectedUser._id.toString()),
            content
        }
        mentionsToCreate.push(function(callback) { createMention(details, callback) });
    }

    async.series[mentionsToCreate, callback];
}

console.log('[INFO] Populating database...');

async.series([populateUsers, populateTweets, populateReplies, populateLikes, populateMentions], (err) => {

    if (err) {
        console.log(`[ERROR] ${err}`);
    }
    else {
        console.log('[INFO] Data successfully loaded!');
    }
    mongoose.connection.close();

});
