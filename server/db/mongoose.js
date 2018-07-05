var mongoose = require('mongoose');

var mongoport = process.env.MONGODB_URI || 'mongodb://localhost:27017/newdb';

mongoose.Promise= global.Promise;
mongoose.connect(mongoport);


module.exports = {
  mongoose
}
