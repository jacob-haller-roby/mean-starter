'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventTypeSchema = new Schema({
  name: String,
  payout: [
    { rank: Number,
      prize: [{
        item:{type: mongoose.Schema.Types.ObjectId, ref: 'Booster'},
        count: Number
      }]
    }
  ]
});

module.exports = mongoose.model('EventType', EventTypeSchema);
