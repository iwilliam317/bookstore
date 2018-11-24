const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/bookstore';
mongoose.connect(process.env.MONGOLAB_URI || mongoURI);

mongoose.Promise = global.Promise;

module.exports = mongoose;
