const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

//creating news model with news schema
const News = mongoose.model('News', newsSchema);

module.exports = { News };
