const Tweet = require('./tweet.model');

const TweetResolvers = {
    Query: {
        tweet: async (_, { id }) => {
            return await Tweet.findById(id);
        },
        tweets: async (_, args) => {
            return await Tweet.find(args);
        }
    },
    Mutation: {
        createTweet: async (_, { input }, { user }) => {
            if (user) return await Tweet.create({ user, ...input });
        },
        updateTweet: async (_, { id, input }, { user }) => {
            const tweet = await Tweet.findById(id);
            if (user && user === tweet.user.toString()) return await Tweet.findByIdAndUpdate(id, input, { new: true });
        },
        deleteTweet: async (_, { id }, { user }) => {
            const tweet = await Tweet.findById(id);
            if (user && user === tweet.user.toString()) return await Tweet.findByIdAndDelete(id);
        }
    }
}

module.exports = TweetResolvers;