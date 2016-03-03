'use strict';

/**
 * @ngdoc directive
 * @name houseFinderApp.directive:dTile
 * @description
 * # dTile
 */
angular.module('houseFinderApp')
  .directive('dTile', function () {
    var defaultOptions = {
      headerText: false,
      bannerText: '',
      buttons: [{text: 'OK', icon: '<i class="fa fa-angle-right"></i>'}]
    };

    return {
      scope: {
        options: '&dTile'
      },
      templateUrl: 'views/dtile.html',
      link: function (scope) {
        scope.$watch('options()', function() {
          scope.tile = angular.element.extend({}, defaultOptions, scope.options());
          console.log('scope.tile is', scope.tile);
        });
      }
    };
  });
