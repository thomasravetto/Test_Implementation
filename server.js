const app = require('./app').default;

const PORT = 3500;

app.listen(PORT, () => {
    console.log('Server listening on Port:', PORT);
});