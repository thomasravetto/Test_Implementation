const supertest = require('supertest');
const app = require('./app');
const { describe } = require('node:test');

describe('POST /users', () => {
    describe('given a username and password', () => {
        // should save username and hash in database
        // should respond with json containing user id
        // should respond with 200 status code
        // should specify application/json in content header
    });

    describe('if username and/or password is missing', () => {
        // should not save username and hash in database
        // should respond with an error message
        // should respond with a 400 status codee
    });
})