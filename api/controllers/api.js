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

router.post('/books', async (request, response) => {
  try{
    const { title, author, release_year, category } = request.body;
    console.log(request.body);
    const book = await Book.create(request.body, (error, result) => {
      if (error)
        return response.status(400).send({ error: error.message });
      
      response.send({ result });
    });
  }
  catch (error){
    response.status(400).send({ error });
  }
});

module.exports = app => app.use('/api', router);
