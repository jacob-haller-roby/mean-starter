'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  eventType:{type: mongoose.Schema.Types.ObjectId, ref: 'EventType'},
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  rank: Number
});

module.exports = mongoose.model('Event', EventSchema);
