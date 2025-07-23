const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  name: String,
  category: String,
  followers: String,
  bio: String,
  image: String,
  social: {
    instagram: String,
    youtube: String,
  },
});

module.exports = mongoose.model('Creator', creatorSchema);
