const router = require('express').Router();

const Book = require('../models/book');

router.get('/books', async (request, response) => {
  try{
    const book = await Book.find({});
    response.send({ book });
  }
  catch (error){
    response.status(400).send({ error });
  }
});

module.exports = app => app.use('/api', router);
