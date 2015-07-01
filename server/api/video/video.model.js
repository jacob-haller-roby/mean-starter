'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
  title: String,
  streamUrl: String,
  photoUrl: String,
  presenterName: String,
  featured: {
    english: String,
    french: String
  }

});

module.exports = mongoose.model('Video', VideoSchema);
