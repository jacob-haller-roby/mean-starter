'use strict';

//angular.module('extendmedBoilerplate')
//  .config(function ($stateProvider) {
//    $stateProvider
//      .state('admin', {
//        url: '/admin',
//        templateUrl: 'app/admin/admin.html',
//        controller: 'AdminCtrl'
//      });
//  });

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.adminvideos', {
        url: 'admin/videos',
        templateUrl: 'app/admin/videos.html',
        controller: 'AdminCtrl',
      });
  });

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.adminvideos.new', {
        url: '/new',
        templateUrl: 'app/admin/videos_new.html',
        controller: 'AdminCtrl',
      });
  });

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider.state('main.adminvideos.edit', {
      url: '/{id}',
      templateUrl: 'app/admin/videos_edit.html',
      controller: 'AdminVideoCtrl',
      resolve: {
        promiseVideo: ['Video', '$stateParams', function(Video, $stateParams){
          return Video.getById($stateParams.id);
        }]
      }
    });
  });

angular.module('extendmedBoilerplate')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.adminusers', {
        url: 'admin/users',
        templateUrl: 'app/admin/users.html',
        controller: 'AdminCtrl'
      });
  });
