const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const Comment = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  pokemon: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', Comment);
