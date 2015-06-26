/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Booster = require('./booster.model');

exports.register = function(socket) {
  Booster.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Booster.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('booster:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('booster:remove', doc);
}