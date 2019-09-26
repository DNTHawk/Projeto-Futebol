const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projeto-times');
mongoose.Promise = global.Promise;

module.exports = mongoose;