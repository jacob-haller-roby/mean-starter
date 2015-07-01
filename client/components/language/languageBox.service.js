'use strict';

angular.module('extendmedBoilerplate')
.factory('LanguageBox', function(){
    var lb = {};

    lb.navbar = {
      english:{
        greeting: 'Hello'
      },
      french:{
       greeting: 'Bonjour'
      }
    };

    lb.get = function(route, language){
      return lb[route][language];
    };

    lb.mixin = function ($scope, Auth, LanguageBox, route) {
      $scope.$watch(function () {
          return Auth.getLanguage();
        },
        function (language) {
          $scope.lb = LanguageBox.get(route, language);
        });
    };

    return lb;

  });
