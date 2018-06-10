const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

global.port = 3000;

module.exports = app;

