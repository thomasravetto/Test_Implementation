const request = require('supertest');
const app = require('./app');

describe('POST /users', () => {
    describe('given a username and password', () => {
        // should save username and hash in database
        // should respond with json containing user id
        test("should respond with 200 status code", async () => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            });
            expect(response.statusCode).toBe(200);
        })
        test("should specify application/json in content header", async () => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
    });

    describe('if username and/or password is missing', () => {
        // should not save username and hash in database
        // should respond with an error message
        // should respond with a 400 status codee
    });
})