const app = require('./config/server.js');

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

const apiRouter = require('./app/controllers/api')(app);

module.exports = app;