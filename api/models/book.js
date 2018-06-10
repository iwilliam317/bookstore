const mongoose = require('../database');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String
  },
  release_year: {
    type: Date
  },
  category: {
    type: String
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;