const UserTypes = `
    type User {
        id: ID!
        name: String!
        email: String
        phone: String
        username: String!
        password: String!
    }

    input UserInput {
        name: String
        email: String
        phone: String
        username: String
        password: String
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Query {
        user(id: ID): User!
        users: [User]!
    }

    type Mutation {
        login(login: String!, password: String!): AuthPayload
        createUser(user: UserInput!): User
        updateUser(id: ID!, user: UserInput!): User
        updateEmail(id: ID!, email: String!): User
        updatePhone(id: ID!, phone: String!): User
        updatePassword(id: ID!, password: String!): User
        deleteUser(id: ID!): User
    }
`

module.exports = UserTypes;
