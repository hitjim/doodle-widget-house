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
        bannerText: 'Describe Your Perfect <strong>' + userLocation +
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
          headerSubtextClass: 'subtext default',
          buttons: [{
            textHtml: '<i class="fa fa-home"></i>House',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-bank"></i>Condo',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-building"></i>Apartment',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-bank"></i>Townhome',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }]
        },
        checked: []
      };
    };

    // $scope.mustHaves = {
    //   options: {}
    // };

    $timeout(function() {
      controller.fetchData();
    });
  });
