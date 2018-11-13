const mongoose = require('../../database');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    release_year: {
        type: Number
    },
    category: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;