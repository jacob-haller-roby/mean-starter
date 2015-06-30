'use strict';

angular.module('extendmedBoilerplate')
  .controller('VideosCtrl', function ($scope, Video) {

    $scope.videos;
    Video.getAll().success(function (val) {
      $scope.videos = val;
    });

  });
