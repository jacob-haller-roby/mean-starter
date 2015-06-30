'use strict';

angular.module('extendmedBoilerplate')
  .controller('AdminCtrl', function ($scope, $http, $location, Auth, User, Video) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.videos = {};
    Video.getAll().success(function (val) {
      $scope.videos = val;
    });


    $scope.delete = function (user) {
      User.remove({id: user._id});
      angular.forEach($scope.users, function (u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.create = function () {
      Video.create($scope.video);
      $scope.video = "";
      $location.path("/admin/videos");

    };

    $scope.deleteById = function (video) {
      Video.deleteById(video._id);
    };
  });
