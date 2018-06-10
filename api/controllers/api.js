const router = require('express').Router();

router.get('/books', async (request, response) => {
  response.send('api funcionando');
});

module.exports = app => app.use('/api', router);
