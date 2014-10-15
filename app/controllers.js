'use strict';

angular.module('DownwardsControllers', [])
  .controller('DownCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoBottom = function() {
        $location.hash('bottom');
        $anchorScroll(600);
      };
    }]);


angular.module('MidwayControllers', [])
  .controller('MidCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoCenter = function() {
        $location.hash('center');
        $anchorScroll(600);
      };
    }]);

angular.module('UpwardsControllers', [])
  .controller('UpCtrl', ['$scope', '$location', '$anchorScroll',
    function ($scope, $location, $anchorScroll) {
      $scope.gotoTop = function() {
        $location.hash('top');
        $anchorScroll(600);
      };
    }]);

  angular.module('ContactControllers', [])
    .controller('ContactCtrl', ['$scope', '$location', '$anchorScroll',
      function ($scope, $location, $anchorScroll) {
        $scope.gotoContact = function() {
          $location.hash('contact');
          $anchorScroll(600);
        };
      }]);

var ItsHannahControllers = angular.module('ItsHannahControllers', []);
ItsHannahControllers.controller('MainCtrl', function($scope){});
ItsHannahControllers.controller('AmyCtrl', function($scope){});
ItsHannahControllers.controller('CinnaCtrl', function($scope){});
ItsHannahControllers.controller('TechwayCtrl', function($scope){});
ItsHannahControllers.controller('OldFashionedCtrl', function($scope){});

