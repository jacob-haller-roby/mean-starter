'use strict';

var _ = require('lodash');
var EventType = require('./eventType.model');

// Get list of eventTypes
exports.index = function(req, res) {
  EventType.find(function (err, eventTypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, eventTypes);
  });
};

// Get a single eventType
exports.show = function(req, res) {
  EventType.findById(req.params.id, function (err, eventType) {
    if(err) { return handleError(res, err); }
    if(!eventType) { return res.send(404); }
    return res.json(eventType);
  });
};

// Creates a new eventType in the DB.
exports.create = function(req, res) {
  EventType.create(req.body, function(err, eventType) {
    if(err) { return handleError(res, err); }
    return res.json(201, eventType);
  });
};

// Updates an existing eventType in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  EventType.findById(req.params.id, function (err, eventType) {
    if (err) { return handleError(res, err); }
    if(!eventType) { return res.send(404); }
    var updated = _.merge(eventType, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, eventType);
    });
  });
};

// Deletes a eventType from the DB.
exports.destroy = function(req, res) {
  EventType.findById(req.params.id, function (err, eventType) {
    if(err) { return handleError(res, err); }
    if(!eventType) { return res.send(404); }
    eventType.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}