'use strict';

// Declare app level module which depends on views, and components


(function(){
  var itsHannahApp = angular.module ('itsHannahApp', [
    'ngRoute',
    'ItsHannahControllers',
    'DownwardsControllers',
    'UpwardsControllers',
    'MidwayControllers',
    'ContactControllers'
    ]);

    itsHannahApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }).
          when('/amy', {
            templateUrl: 'views/amy.html',
            controller: 'AmyCtrl'
          }).
          when('/cinna', {
            templateUrl: 'views/cinna.html',
            controller: 'CinnaCtrl'
          }).
          when('/techway', {
            templateUrl: 'views/techway.html',
            controller: 'TechwayCtrl'
          }).
          when('/oldfashioned', {
            templateUrl: 'views/oldfashioned.html',
            controller: 'OldFashionedCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);

})();

