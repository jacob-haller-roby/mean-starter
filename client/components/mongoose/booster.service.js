'use strict';

angular.module('mtgoroiApp')
  .factory('Booster', function ($http, socket) {
    var booster = { boosters: []};

    booster.getBoosters = function(){
      return $http.get('/api/boosters').success(function(data){
        booster.boosters = data;
        socket.syncUpdates('booster', booster.boosters);
        return data;
      });
    };

    booster.createBooster = function(booster){
      $http.post('/api/boosters', booster);
    };

    booster.deleteBooster = function(id){
      $http.delete('/api/boosters/' + id);
    };
    return booster;
  });
