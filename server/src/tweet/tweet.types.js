const TweetTypes = `
    type Tweet {
        id: ID!
        user: User!
        image: String
        message: String!
        date: Date!
    }

    input TweetInput {
        image: String
        message: String
        tags: [String]
    }

    type Like {
        id: ID!
        user: User!
        content: ID!
    }

    type Reply {
        from: User!
        to: User!
        content: ID!
        message: String!
        date: Date!
        seen: Boolean!
    }

    input ReplyInput {
        to: String!
        content: String
        onModel: String
        message: String
    }

    type Mention {
        user: User!
        mentioned: User!
        content: ID!
        date: Date!
        seen: Boolean!
    }

    type Query {
        tweet(id: ID!): Tweet!
        tweets(user: ID, tags: [String]): [Tweet]!
        likes(content: ID): [Like]!
        replies(to: ID!): [Reply]!
        mentions(mentioned: ID!): [Mention]!
    }

    type Mutation {
        createTweet(input: TweetInput!): Tweet
        updateTweet(id: ID!, input: TweetInput!): Tweet
        deleteTweet(id: ID!): Tweet
        createLike(content: ID!): Like
        deleteLike(id: ID!): ID
        createReply(input: ReplyInput!): Reply
        deleteReply(id: ID!): ID
        createMention(mentioned: ID!, content: ID!): Mention
        deleteMention(id: ID!): ID
    }
`

module.exports = TweetTypes;