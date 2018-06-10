const router = require('express').Router();

const Book = require('../models/book');

router.get('/books', async (request, response) => {
  response.send('api funcionando');
});

module.exports = app => app.use('/api', router);
