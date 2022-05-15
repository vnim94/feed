const UserTypes = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        user(id: ID): User!
        users: [User]!
    }

    type Mutation {
        createUser(user: UserInput!): User
        updateUser(id: ID!, user: UserInput!): User
        deleteUser(id: ID!): User
    }
`

module.exports = UserTypes;
