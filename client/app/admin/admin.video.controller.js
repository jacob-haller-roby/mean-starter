'use strict';

angular.module('extendmedBoilerplate')
  .controller('AdminVideoCtrl', function ($scope, $http, $location, Auth, User, Video, promiseVideo) {


    $scope.video = promiseVideo.data;
    $scope.update = function(){
      Video.update($scope.video);
      $location.path('admin/videos');
    };

  });
