/*globals jwplayer*/
'use strict';

angular.module('extendmedBoilerplate')
  .controller('VideosWatchCtrl', function ($scope, promiseVideo) {

    $scope.video = promiseVideo.data;

    $scope.loadVideo = function(){
      jwplayer('jw-container').setup({
        file: $scope.video.streamUrl,
        width: '100%',
        aspectratio: '16:10',
        skin: 'bekle',
        image: 'assets/images/alas-logo.png'});
    };

    $scope.$on('$viewContentLoaded', function(){
      $scope.loadVideo();
    });


  });
