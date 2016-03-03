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

    controller.fetchData = function() {
      promise = locationService.ipapi.get();
      promise.then(function(response) {
        controller.buildDataModel(response.data);
      }, function(response) {
        controller.defaultLocation = {
          city: 'Earth',
          region: 'MW'
        };
        controller.buildDataModel(controller.defaultLocation);
      });

    };

    controller.buildDataModel = function(data) {
      console.log('DATA in buildDataModel is', angular.copy(data));
      $scope.bannerOptions = {
        bannerText: 'Describe your Perfect <strong>' + data.city + ', ' +
            data.region + '</strong> Home',
        headerText: 'Find the home you are looking for',
        buttons: [{
          text: 'Find Your Home',
          icon: '<i class="fa fa-angle-right"></i>',
          class: 'commit btn btn-default',
          action: function() {window.alert('Imagine that I just found you a house!');}
        }, {
          text: 'Clear Selection',
          icon: '<i class="fa fa-times"></i>',
          class: 'clear btn btn-default',
          action: function() {window.alert('Imagine I just cleared all selections');}
        }]
      };
    };

    $timeout(function() {
      controller.fetchData();
    });
  });
