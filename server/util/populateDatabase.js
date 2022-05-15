#! /usr/bin/env node
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const async = require('async');
const bcrypt = require('bcryptjs');

const User = require('../src/user/user.model');

mongoose.connect(process.env.DATABASE);
const database = mongoose.connection;
database.once('open', () => console.log('[INFO] Successfully connected to database'));
database.on('error', console.error.bind(console, 'Error connecting to database'));

let users = [];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function createUser(details, callback) {
    let user = new User(details);
         
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
  
function populateUsers(callback) {
    let usersToCreate = [];

    for (let i = 0; i < 5; i++) {
        let details = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: 'password'
        }
        usersToCreate.push(function(callback) { createUser(details, callback) });
    }

    async.series(usersToCreate, callback);
}

console.log('[INFO] Populating database...');

async.series([populateUsers], (err) => {

    if (err) {
        console.log(`[ERROR] ${err}`);
    }
    else {
        console.log('[INFO] Data successfully loaded!');
    }
    mongoose.connection.close();

});
