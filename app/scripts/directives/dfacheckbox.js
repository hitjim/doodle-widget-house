'use strict';

/**
 * @ngdoc directive
 * @name houseFinderApp.directive:dFaCheckbox
 * @description
 * # dFaCheckbox
 */
angular.module('houseFinderApp')
  .directive('dFaCheckbox', function () {
    return {
      scope: {
        options: '&dFaCheckbox'
      },
      templateUrl: 'views/dfacheckbox.html',
      link: function (scope) {
        console.log('THIS HAPPENS');
        scope.$watch('options()', function() {
          console.log('options() is', scope.options());
          scope.checked = scope.options();
        });
      }
    };
  });
