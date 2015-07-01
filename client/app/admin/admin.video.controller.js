'use strict';

angular.module('extendmedBoilerplate')
  .controller('AdminVideoCtrl', function ($scope, $http, $location, Auth, User, Video, promiseVideo) {

    $scope.features = [{
      name: 'TopFeature',
      code: 'TopFeature'
    },{
      name: 'Hidden',
      code: 'Hidden'
    },{
      name: 'None',
      code: undefined
    }];

    $scope.video = promiseVideo.data;
    $scope.featureCode = $scope.video.featured ? $scope.video.featured[Auth.getLanguage()] : '';
    $scope.update = function(){
      if(typeof $scope.video.featured === 'undefined'){
        $scope.video.featured = {};
      }
      $scope.video.featured[Auth.getLanguage()] = $scope.featureCode;
      Video.update($scope.video);
      $location.path('admin/videos');
    };

  });
