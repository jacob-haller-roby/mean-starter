'use strict';

angular.module('extendmedBoilerplate')
  .factory('jwplayerTest', function ($window) {
    var o = {};
    o.loadVideo = $window.jwplayer;
    return o;
  });
