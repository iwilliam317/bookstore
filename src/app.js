const app = require('./config/server.js');

app.listen(process.env.PORT || 3000);

const apiRouter = require('./app/controllers/api')(app);

module.exports = app;