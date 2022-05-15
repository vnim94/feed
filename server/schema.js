const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const UserTypes = require('./src/user/user.types');
const UserResolvers = require('./src/user/user.resolvers');

exports.typeDefs = mergeTypeDefs([
    UserTypes
])

exports.resolvers = mergeResolvers([
    UserResolvers
])

exports.schema = makeExecutableSchema({
    typeDefs: this.typeDefs,
    resolvers: this.resolvers
})
