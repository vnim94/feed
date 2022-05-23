const User = require('../../src/user/user.model');
const mockDatabase = require('../../util/memoryDatabase');
const bcrypt = require('bcryptjs');
const { typeDefs, resolvers } = require('../../schema');
const EasyGraphQLTester = require('easygraphql-tester');
const tester = new EasyGraphQLTester(typeDefs, resolvers);

let user;

beforeAll(async () => {
    await mockDatabase.connect();
    await mockDatabase.seed();
    user = await User.findOne();
})

afterAll(async () => await mockDatabase.disconnect());

describe('user model', () => {

    let user;
    beforeAll(async () => {
        user = await User.create({
            name: 'John Smith',
            email: 'jsmith@email.com',
            password: 'password'
        });
    })

    test('password hashed', async () => {
        expect(bcrypt.compareSync('password',user.password)).toBeTruthy();
    })

    test('default username', async () => {
        expect(user.username).toBe('jsmith');
    })

    describe('validation errors', () => {
        
        test('invalid input', () => {
            const invalid = new User({
                name: '',
                email: '',
                password: 'as'
            })
            invalid.validate((err) => {
                expect(err).toBeTruthy()
            })
        })
        
    });

});

describe('user resolvers', () => {
    describe('query', () => {
        test('get user', async () => {
            const query = `
                {
                    user(id: "${user._id}") {
                        name
                        email
                        phone
                        username
                        password
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.user.name).toBe('John Smith');
        })

        test('get users', async () => {
            const query = `
                {
                    users {
                        name
                        email
                        phone
                        username
                        password
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.users[0].name).toBe('John Smith');
        })
    })

    describe('mutation', () => {
        describe('login', () => {

            const mutation = `
                mutation login($login: String!, $password: String!) {
                    login(login: $login, password: $password) {
                        token
                        user {
                            id
                        }
                    }
                }
            `

            test('using phone', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    login: '0123456789',
                    password: 'password'
                });
                expect(response.data.login.token).toBeTruthy();
                expect(response.data.login.user).toBeTruthy();
            })

            test('using email', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    login: 'jsmith@email.com',
                    password: 'password'
                })
                expect(response.data.login.token).toBeTruthy();
                expect(response.data.login.user).toBeTruthy();
            })

            test('using username', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    login: 'jsmith',
                    password: 'password'
                })
                expect(response.data.login.token).toBeTruthy();
                expect(response.data.login.user).toBeTruthy();
            })

            test('invalid login', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    login: 'invalid',
                    password: 'abc'
                })
                expect(response.data.login).toBeFalsy();
            })

            test('incorrect password', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    login: 'jsmith',
                    password: 'incorrect'
                })
                expect(response.data.login).toBeFalsy();
            })
        })

        test('createUser', async () => {
            const mutation = `
                mutation CreateUser($user: UserInput!) {
                    createUser(user: $user) {
                        name
                        email
                        phone
                        username
                        password
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, {}, {
                user: {
                    name: 'Bob Brown',
                    email: 'bbrown@email.com',
                    password: 'password'
                }
            })
            expect(response.data.createUser.name).toBe('Bob Brown');
        })

        test('updateUser', async () => {
            const mutation = `
                mutation updateUser($id: ID!, $user: UserInput!) {
                    updateUser(id: $id, user: $user) {
                        name
                        email
                        phone
                        username
                    }
                }
            `
            const response = await tester.graphql(mutation,{},{ userId: user._id.toString() },{
                id: user._id.toString(),
                user: {
                    name: 'updated',
                    username: 'updated'
                }
            })
            expect(response.data.updateUser.name).toBe('updated');
        })

        test('updateEmail', async () => {
            const mutation = `
                mutation updateEmail($id: ID!, $email: String!) {
                    updateEmail(id: $id, email: $email) {
                        email
                    }
                }
            `
            const response = await tester.graphql(mutation,{},{ userId: user._id.toString() },{
                id: user._id.toString(),
                email: 'updated@email.com'
            })
            expect(response.data.updateEmail.email).toBe('updated@email.com')
        })

        test('updatePhone', async () => {
            const mutation = `
                mutation updatePhone($id: ID!, $phone: String!) {
                    updatePhone(id: $id, phone: $phone) {
                        phone
                    }
                }
            `
            const response = await tester.graphql(mutation,{},{ userId: user._id.toString() },{
                id: user._id.toString(),
                phone: '0123456789'
            })
            expect(response.data.updatePhone.phone).toBe('0123456789')
        })

        test('deleteUser', async () => {
            const mutation = `
                mutation deleteUser($id: ID!) {
                    deleteUser(id: $id) {
                        id
                    }
                }
            `
            const response = await tester.graphql(mutation,{},{ userId: user._id.toString() },{ id: user._id.toString() });
            expect(response.data.deleteUser.id).toBe(user._id.toString());
        })
    })
})
