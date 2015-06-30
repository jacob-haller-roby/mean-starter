'use strict';

angular.module('extendmedBoilerplate')
  .factory('Video', function ($http, socket) {
    var video = {videos: []};

    video.getAll = function () {
      return $http.get('/api/videos').success(function (data) {
        video.videos = data;
        socket.syncUpdates('video', video.videos);
        return data;
      });
    };

    video.getById = function (id) {
      return $http.get('api/videos/' + id).success(function (data) {
        return data;
      });
    };

    video.update = function (video) {
      return $http.put('api/videos/' + video._id, video).success(function (data) {
        return data;
      });
    };

    video.create = function (video) {
      $http.post('/api/videos', video);
    };

    video.deleteById = function (id) {
      $http.delete('/api/videos/' + id);
    };
    return video;
  });


