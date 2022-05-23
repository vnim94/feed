require('dotenv').config();
const User = require('./user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserResolvers = {
    Query: {
        user: async (_, { id }) => {
            return await User.findById(id);
        },
        users: async () => {
            return await User.find({});
        }
    },
    Mutation: {
        login: async (_, { login, password }) => {
            let user;
            if (login.match('@')) {
                user = await User.findOne({ email: login });
            } else if (login.match('[^0-9].*')) {
                user = await User.findOne({ username: login }) 
            } else {
                user = await User.findOne({ phone: login });
            }

            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(user._id.toString(), process.env.TOKEN_SECRET);
                return { token, user };
            }
        },
        createUser: async (_, { user }) => {
            return await User.create(user);
        },
        updateUser: async (_, { id, user }, { userId }) => {
            if (userId && userId === id) return await User.findByIdAndUpdate(id, user, { new: true });
        },
        updateEmail: async (_, { id, email }, { userId }) => {
            if (userId && userId === id) return await User.findByIdAndUpdate(id, { email }, { new: true });
        },
        updatePhone: async (_, { id, phone }, { userId }) => {
            if (userId && userId === id) return await User.findByIdAndUpdate(id, { phone }, { new: true });
        },
        deleteUser: async (_, { id }, { userId }) => {
            if (userId && userId === id) return await User.findByIdAndDelete(id);
        }
    }
}

module.exports = UserResolvers;
