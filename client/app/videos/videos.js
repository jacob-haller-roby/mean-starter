'use strict';

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.videos', {
        url: 'videos',
        templateUrl: 'app/videos/videos.html',
        controller: 'VideosCtrl',
        authenticate: true
      });
  });

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.videos.watch', {
        url: '/{id}',
        templateUrl: 'app/videos/videos.watch.html',
        controller: 'VideosWatchCtrl',
        resolve:{
          promiseVideo: function($stateParams, Video){
            return Video.getById($stateParams.id);
          }
        },
        authenticate: true
      });
  });
