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
      var userLocation = data.city+ ', ' + data.region;
      $scope.tileOptions = {
        bannerText: 'Describe your Perfect <strong>' + userLocation +
            '</strong> Home',
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
        }],
        contentTemplate: 'views/housefindercontent.html'
      };

      $scope.propertyType = {
        options: {
          headerText: 'Pick a Property Type',
          headerSubtext: '25 Homes for Sale · ' + userLocation,
          headerSubtextHtml: null,
          buttons: [{
            text: 'House',
            icon: '<i class="fa fa-home"></i>',
            type: 'checkbox ',
            checked: false
          }, {
            text: 'Condo',
            icon: '<i class="fa fa-bank"></i>',
            type: 'checkbox',
            checked: false
          }, {
            text: 'Apartment',
            icon: '<i class="fa fa-building"></i>',
            type: 'checkbox',
            checked: false
          }, {
            text: 'Townhome',
            icon: '<i class="fa fa-bank"></i>',
            type: 'checkbox',
            checked: false
          }]
        },
        checked: []
      };
    };

    $timeout(function() {
      controller.fetchData();
    });
  });
