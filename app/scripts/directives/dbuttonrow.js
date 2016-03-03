'use strict';

/**
 * @ngdoc directive
 * @name houseFinderApp.directive:dButtonRow
 * @description
 * # dButtonRow
 */
angular.module('houseFinderApp')
  .directive('dButtonRow', function () {
    var defaultOptions = {
      headerText: null,
      headerSubtext: null,
      headerSubtextHtml: null,
      buttons: [],
    };

    return {
      scope: {
        options: '&dButtonRow',
        checked: '=',
        selectedDropDown: '='
      },
      templateUrl: 'views/dbuttonrow.html',
      link: function (scope) {
        scope.$watch('options()', function() {
          scope.buttonRow = angular.element.extend({}, defaultOptions, scope.options());
        });
      }
    };
  });
