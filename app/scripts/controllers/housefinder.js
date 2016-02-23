'use strict';

/**
 * @ngdoc function
 * @name houseFinderApp.controller:HousefinderCtrl
 * @description
 * # HousefinderCtrl
 * Controller of the houseFinderApp
 */
angular.module('houseFinderApp')
  .controller('HouseFinderCtrl', function (locationService, $scope, $timeout) {
    var controller = this;
    var promise;

    controller.buildLocation = function(data) {
      return data.city + ', ' + data.region;
    }

    $scope.fetchData = function() {
      promise = locationService.ipapi.get();
      promise.then(function(response) {
        $scope.userLocation = controller.buildLocation(response.data);
      }, function(response) {
        controller.userLocation = {
          city: 'Earth',
          region: 'MW'
        };
        $scope.userLocation = controller.buildLocation(controller.userLocation);
      });
    };

    $scope.fetchData();
  });
