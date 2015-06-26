'use strict';

angular.module('mtgoroiApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Booster) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.boosters = {};
    Booster.getBoosters().success(function(val){
      $scope.boosters = val;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.createBooster = function(){
      Booster.createBooster({name: $scope.name});
      $scope.name = '';
    };

    $scope.deleteBooster = function(booster){
      Booster.deleteBooster(booster._id);
    };
  });
