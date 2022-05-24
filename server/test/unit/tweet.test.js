const mockDatabase = require('../../util/memoryDatabase');
const { typeDefs, resolvers } = require('../../schema');
const EasyGraphQLTester = require('easygraphql-tester');
const tester = new EasyGraphQLTester(typeDefs, resolvers);

const User = require('../../src/user/user.model');
const Tweet = require('../../src/tweet/tweet.model');
const Reply = require('../../src/tweet/reply.model');
const Mention = require('../../src/tweet/mention.model');
const Like = require('../../src/tweet/like.model');

let user;
let userB;
let tweet;
let reply;
let mention;
let like;

beforeAll(async () => {
    await mockDatabase.connect();
    await mockDatabase.seed();
    user = await User.findOne({ name: 'John Smith' });
    userB = await User.findOne({ name: 'Charlie Brown' });
    tweet = await Tweet.findOne();
    reply = await Reply.findOne();
    mention = await Mention.findOne();
    like = await Like.findOne();
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

        describe('tweets', () => {
            test('all', async () => {  
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

            test('by user', async () => {
                const query = `
                    {
                        tweets(user: "${user._id}") {
                            message
                        }
                    }
                `
                const response = await tester.graphql(query, {}, {}, {});
                expect(response.data.tweets[0].message).toBe('This is a tweet');
            })

            test('by tags', async () => {
                await Tweet.create({
                    user: user._id.toString(),
                    message: 'another tweet',
                    tags: ['tagB']
                })
                const query = `
                    query tweets($tags: [String]) {
                        tweets(tags: $tags) {
                            message
                        }
                    }
                    
                `
                const response = await tester.graphql(query, {}, {}, {
                    tags: ['tagB']
                })
                expect(response.data.tweets.length).toBe(1);
                expect(response.data.tweets[0].message).toBe('another tweet');
                
            })
        })

        test('likes', async () => {
            const query = `
                {
                    likes(content: "${tweet._id}") {
                        user {
                            name
                            username
                        }
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.likes[0].user.name).toBe('Charlie Brown');
        })

        test('replies', async () => {
            const query = `
                {
                    replies(to: "${user._id}") {
                        from {
                            name
                        }
                        to {
                            name
                        }
                        content 
                        message
                        date
                        seen
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.replies[0].message).toBe('this is a reply');
            expect(response.data.replies[0].from.name).toBe('Charlie Brown');
        })

        test('mentions', async () => {
            const query = `
                {
                    mentions(mentioned: "${user._id}") {
                        user {
                            name
                        }
                        mentioned {
                            name
                        }
                        content 
                        date
                        seen
                    }
                }
            `
            const response = await tester.graphql(query, {}, {}, {});
            expect(response.data.mentions[0].mentioned.name).toBe('John Smith');
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

        test('create reply', async () => {
            const mutation = `
                mutation createReply($input: ReplyInput!) {
                    createReply(input: $input) {
                        from {
                            name
                        }
                        to {
                            name
                        }
                        content
                        message
                        date
                        seen
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id }, {
                input: {
                    to: userB._id.toString(),
                    content: reply._id.toString(),
                    onModel: 'Reply',
                    message: 'replying to your reply'
                }
            })
            expect(response.data.createReply.message).toBe('replying to your reply');
        })

        test('update reply', async () => {
            const mutation = `
                mutation {
                    updateReply(id: "${reply._id}", message: "updated reply") {
                        from {
                            name
                        }
                        to {
                            name
                        }
                        content
                        message
                        date
                        seen
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, { user: userB._id.toString() }, {});
            expect(response.data.updateReply.message).toBe('updated reply');
        })

        test('delete reply', async () => {
            const mutation = `
                mutation {
                    deleteReply(id: "${reply._id}") 
                }
            `
            const response = await tester.graphql(mutation, {}, { user: userB._id.toString() }, {});
            expect(response.data.deleteReply).toBe(reply._id.toString());
        })

        test('create like', async () => {
            const mutation = `
                mutation {
                    createLike(content: "${reply._id}") {
                        user {
                            name
                            username
                        }
                    }   
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id }, {});
            expect(response.data.createLike.user.name).toBe('John Smith');
        })

        test('delete like', async () => {
            const mutation = `
                mutation {
                    deleteLike(id: "${like._id}") 
                }
            `
            const response = await tester.graphql(mutation, {}, { user: userB._id.toString() }, {});
            expect(response.data.deleteLike).toBe(like._id.toString());
        })

        test('create mention', async () => {
            const mutation = `
                mutation {
                    createMention(mentioned: "${user._id}", content: "${tweet._id}") {
                        user {
                            name
                        }
                        mentioned {
                            name
                        }
                        content
                        date
                        seen
                    }
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id }, {});
            expect(response.data.createMention.mentioned.name).toBe('John Smith');
        })

        test('delete mention', async () => {
            const mutation = `
                mutation {
                    deleteMention(id: "${mention._id}")
                }
            `
            const response = await tester.graphql(mutation, {}, { user: user._id.toString() }, {});
            expect(response.data.deleteMention).toBe(mention._id.toString());
        })
    })
})