const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore');

mongoose.Promise = global.Promise;

module.exports = mongoose;
