const mongoose = require('mongoose');

const actSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  amount: {
    type: String
  }
});

const Act = mongoose.model('Act', actSchema);

module.exports = Act;
