const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore');

mongoose.Promise = global.Promise;

module.exports = mongoose;
