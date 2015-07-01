/*globals jwplayer*/
'use strict';

angular.module('extendmedBoilerplate')
  .controller('VideosCtrl', function ($scope, Video, Auth) {


    Video.getAll().success(function (val) {
      $scope.videos = val;
    });

    $scope.loadVideo = function (url) {
      jwplayer('jw-container').setup({
        file: url,
        width: '100%',
        aspectratio: '16:10',
        skin: 'bekle',
        image: 'assets/images/alas-logo.png'
      });
    };

    $scope.$on('$viewContentLoaded', function(){
      Video.getFeatured(Auth.getLanguage(), 'TopFeature').success(function (data) {
          $scope.loadVideo(data.streamUrl);
          $scope.topFeatureVideo = data;
        }
      );
    });


  });
