'use strict';

angular.module('extendmedBoilerplate')
  .controller('VideosCtrl', function ($scope, Video) {

    Video.getAll().success(function (val) {
      $scope.videos = val;
    });

  });
