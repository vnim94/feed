const TweetTypes = `
    type Tweet {
        user: User!
        image: String
        message: String!
        date: Date!
    }

    input TweetInput {
        user: ID!
        image: String
        message: String
    }

    type Query {
        tweet(id: ID!): Tweet!
        tweets(user: ID): [Tweet]!
    }

    type Mutation {
        createTweet(input: TweetInput!): Tweet
        updateTweet(id: ID!, message: String!): Tweet
        deleteTweet(id: ID!): Tweet
    }
`

module.exports = TweetTypes;