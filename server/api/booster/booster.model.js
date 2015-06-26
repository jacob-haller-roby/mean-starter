'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BoosterSchema = new Schema({
  name: String,
  price: [
    { date: Date,
      value: Number
    }
  ]
});

module.exports = mongoose.model('Booster', BoosterSchema);
