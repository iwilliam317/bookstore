const mongoose = require('mongoose');
const uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost:27017/bookstore';

mongoose.connect(uristring,  (err, res) => {
      if (err) {
      console.log (`ERROR connecting to:  ${uristring} -  ${err}`);
      } else {
      console.log (`Succeeded connected to: ${uristring}`);
      }
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;

