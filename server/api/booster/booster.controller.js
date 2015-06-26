'use strict';

var _ = require('lodash');
var Booster = require('./booster.model');

// Get list of boosters
exports.index = function(req, res) {
  Booster.find(function (err, boosters) {
    if(err) { return handleError(res, err); }
    return res.json(200, boosters);
  });
};

// Get a single booster
exports.show = function(req, res) {
  Booster.findById(req.params.id, function (err, booster) {
    if(err) { return handleError(res, err); }
    if(!booster) { return res.send(404); }
    return res.json(booster);
  });
};

// Creates a new booster in the DB.
exports.create = function(req, res) {
  Booster.create(req.body, function(err, booster) {
    if(err) { return handleError(res, err); }
    return res.json(201, booster);
  });
};

// Updates an existing booster in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Booster.findById(req.params.id, function (err, booster) {
    if (err) { return handleError(res, err); }
    if(!booster) { return res.send(404); }
    var updated = _.merge(booster, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, booster);
    });
  });
};

// Deletes a booster from the DB.
exports.destroy = function(req, res) {
  Booster.findById(req.params.id, function (err, booster) {
    if(err) { return handleError(res, err); }
    if(!booster) { return res.send(404); }
    booster.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}