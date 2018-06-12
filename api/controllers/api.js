const router = require('express').Router();

const Book = require('../models/book');

const mongoose = require('mongoose');

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


router.get('/books/:id', async(request, response) => {
  try{
    const id = mongoose.mongo.ObjectId(request.params.id);
    // console.log(id);
    const book = await Book.find({ _id: id}, (error, result) => {
      if(error)
        return response.status(400).send({ error: error.message});

      response.send({ result });
    });
  }
  catch (error){
    response.status(400).send({ error });
  }
});

router.put('/books/:id', async (request, response) => {
  try{
    const id = mongoose.mongo.ObjectId(request.params.id);
    await Book.update({ _id: id }, request.body, (error, result) => {
      // do something
    });
  }
  catch (error){

  }
});

module.exports = app => app.use('/api', router);
