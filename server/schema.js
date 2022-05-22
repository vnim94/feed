const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { GraphQLScalarType } = require('graphql');

const GeneralTypes = `
    interface Error {
        message: String!
    }
    type NotFound implements Error {
        message: String!
        id: ID!
    }
    scalar Date
`
const GeneralResolvers = {
    Error: {
        __resolveType: (_) => {
            if (_.__typeName === 'Error') return 'Error';
            return null;
        }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        parseValue: (value) => {
            return new Date(value);
        },
        serialize: (value) => {
            return value.toISOString();
        },
        parseLiteral: (ast) => {
            if (ast.kind === Kind.INT) return new Date(+ast.value);
            return null;
        }
    })
}

const UserTypes = require('./src/user/user.types');
const TweetTypes = require('./src/tweet/tweet.types');

const UserResolvers = require('./src/user/user.resolvers');
const TweetResolvers = require('./src/tweet/tweet.resolvers'); 

exports.typeDefs = mergeTypeDefs([
    GeneralTypes,
    UserTypes,
    TweetTypes
])

exports.resolvers = mergeResolvers([
    GeneralResolvers,
    UserResolvers,
    TweetResolvers
])

exports.schema = makeExecutableSchema({
    typeDefs: this.typeDefs,
    resolvers: this.resolvers
})
