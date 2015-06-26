'use strict';

angular.module('mtgoroiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });

angular.module('mtgoroiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin_boosters', {
        url: '/admin/boosters',
        templateUrl: 'app/admin/boosters.html',
        controller: 'AdminCtrl',
      });
  });
