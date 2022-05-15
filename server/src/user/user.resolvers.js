const User = require('./user.model');

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
        createUser: async (_, { name, email, password }) => {

        },
        updateUser: async (_, { id, name, email, password }) => {

        },
        deleteUser: async (_, { id }) => {

        }
    }
}

module.exports = UserResolvers;
