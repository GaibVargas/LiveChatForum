const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: 'ObjectID',
    ref: 'User',
  },
});

module.exports = mongoose.model('Post', PostSchema);
