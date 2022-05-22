const User = require('../../src/user/user.model');
const Tweet = require('../../src/tweet/tweet.model');
const mockDatabase = require('../../util/memoryDatabase');
const { typeDefs, resolvers } = require('../../schema');
const EasyGraphQLTester = require('easygraphql-tester');
const tester = new EasyGraphQLTester(typeDefs, resolvers);

let user;
let tweet;

beforeAll(async () => {
    await mockDatabase.connect();
    await mockDatabase.seed();
    user = await User.findOne();
    tweet = await Tweet.findOne();
})

afterAll(async () => await mockDatabase.disconnect());

describe('tweet resolvers', () => {
    describe('queries', () => {
        test('tweet', async () => {
            const query = `
                {
                    tweet(id: "${tweet._id.toString()}") {
                        message
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.tweet.message).toBe('This is a tweet');
        })

        test('tweets', async () => {  
            const query = `
                {
                    tweets {
                        message
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.tweets[0].message).toBe('This is a tweet');
        })
    })

    describe('mutations', () => {
        test('createTweet', async () => {
            const mutation = `
                mutation createTweet($input: TweetInput!) {
                    createTweet(input: $input) {
                        id
                        message
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id.toString() }, {
                input: {
                    message: 'this is a new tweet'
                }
            })
            expect(response.data.createTweet.message).toBe('this is a new tweet');
        })

        describe('updateTweet', () => {

            const mutation = `
                mutation updateTweet($id: ID!, $input: TweetInput!) {
                    updateTweet(id: $id, input: $input) {
                        message
                        image
                    }
                }
            `

            test('user and valid input', async () => {
                const response = await tester.graphql(mutation, {}, { user: user._id.toString() }, {
                    id: tweet._id.toString(),
                    input: {
                        message: 'this is an updated tweet',
                        image: '/assets/img'
                    }
                })
                expect(response.data.updateTweet.message).toBe('this is an updated tweet');
                expect(response.data.updateTweet.image).toBe('/assets/img');
            })

            test('not logged in / not author of tweet', async () => {
                const response = await tester.graphql(mutation, {}, {}, {
                    id: tweet._id.toString(),
                    input: {
                        message: 'this is an updated tweet',
                        image: '/assets/img'
                    }
                })
                expect(response.data.updateTweet).toBeFalsy();
            })

        })

        test('deleteTweet', async () => {
            const mutation = `
                mutation deleteTweet($id: ID!) {
                    deleteTweet(id: $id) {
                        id
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id.toString()}, {
                id: tweet._id.toString()
            })
            expect(response.data.deleteTweet.id).toBe(tweet._id.toString());
        })
    })
})