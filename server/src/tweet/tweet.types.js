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

    type Query {
        tweet(id: ID!): Tweet!
        tweets(user: ID): [Tweet]!
    }

    type Mutation {
        createTweet(input: TweetInput!): Tweet
        updateTweet(id: ID!, input: TweetInput!): Tweet
        deleteTweet(id: ID!): Tweet
    }
`

module.exports = TweetTypes;