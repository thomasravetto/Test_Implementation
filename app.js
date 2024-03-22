const express = require('express');

const app = express();

app.post('/users', (req, res)=> {
    res.status(200).json({greetings: 'ciao'})
});

module.exports = app;