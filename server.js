/*
    This is the starting point for the app.
*/

const http = require('http');
const { hostname } = require('os');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, hostname:() => {
    console.log('Started on port ${port}');
});