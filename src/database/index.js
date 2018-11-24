const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore';
mongoose.connect(url);

mongoose.Promise = global.Promise;

module.exports = mongoose;
