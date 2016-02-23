'use strict';

/**
 * @ngdoc directive
 * @name houseFinderApp.directive:dTile
 * @description
 * # dTile
 */
angular.module('houseFinderApp')
  .directive('dTile', function () {
    return {
      scope: {
        options: '&dTile'
      },
      templateUrl: 'views/dtile.html',
      link: function postLink(scope) {
        scope.$watch('options()', function() {
          scope.message = scope.options();
        });
      }
    };
  });
