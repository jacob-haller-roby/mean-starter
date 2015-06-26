/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var EventType = require('./eventType.model');

exports.register = function(socket) {
  EventType.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  EventType.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('eventType:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('eventType:remove', doc);
}