const Tweet = require('./tweet.model');
const Like = require('./like.model');
const Reply = require('./reply.model');
const Mention = require('./mention.model');

const TweetResolvers = {
    Query: {
        tweet: async (_, { id }) => {
            return await Tweet.findById(id);
        },
        tweets: async (_, { tags, user }) => {
            const query = {}
            if (tags) query.tags = { $in: tags };
            if (user) query.user = user; 
            return await Tweet.find(query);
        },
        likes: async (_, { content }) => {
            return await Like.find({ content }).populate('user');
        },
        replies: async (_, { to }) => {
            return await Reply.find({ to }).populate('from to');
        },
        mentions: async (_, { mentioned }) => {
            return await Mention.find({ mentioned }).populate('user mentioned');
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
        },
        createReply: async (_, { input }, { user }) => {
            if (user) {
                const reply = await Reply.create({ from: user._id, ...input });
                return await Reply.findById(reply._id).populate('from to');
            }
        },
        createLike: async (_, { content }, { user }) => {
            if (user) {
                const like = await Like.create({ user, content });
                return await Like.findById(like._id).populate('user');
            }
        },
        deleteLike: async (_, { id }, { user }) => {
            const like = await Like.findById(id);
            if (user && user === like.user.toString()) {
                await Like.findByIdAndDelete(id);
                return id;
            }
        },
        createMention: async (_, { mentioned, content }, { user }) => {
            if (user) {
                const mention = await Mention.create({ user, mentioned, content });
                return await Mention.findById(mention._id).populate('user mentioned');
            }
        },
        deleteMention: async (_, { id }, { user }) => {
            const mention = await Mention.findById(id);
            if (user && (user === mention.user._id.toString() || user === mention.mentioned._id.toString())) {
                await Mention.findByIdAndDelete(id);
                return id;
            }
        }
    }
}

module.exports = TweetResolvers;