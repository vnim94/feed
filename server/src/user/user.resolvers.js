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
        createUser: async (_, { user }) => {
            return await User.create(user);
        },
        updateUser: async (_, { id, user }) => {
            return await User.findByIdAndUpdate(id, user, { new: true });
        },
        updateEmail: async (_, { id, email }) => {
            return await User.findByIdAndUpdate(id, { email }, { new: true });
        },
        updatePhone: async (_, { id, phone }) => {
            return await User.findByIdAndUpdate(id, { phone }, { new: true });
        },
        deleteUser: async (_, { id }) => {
            return await User.findByIdAndDelete(id);
        }
    }
}

module.exports = UserResolvers;
