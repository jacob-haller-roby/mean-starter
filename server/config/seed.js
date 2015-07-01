/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');


User.find({}).remove(function () {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'english@test.com',
      password: 'test',
      language: 'english'
    }, {
      provider: 'local',
      name: 'Test User',
      email: 'french@test.com',
      password: 'test',
      language: 'french'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'french@admin.com',
      password: 'admin',
      language: 'french'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'english@admin.com',
      password: 'admin',
      language: 'english'
    }, function () {
      console.log('finished populating users');
    }
  );
});
