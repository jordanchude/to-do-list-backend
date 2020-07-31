const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employees', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise

module.exports = mongoose