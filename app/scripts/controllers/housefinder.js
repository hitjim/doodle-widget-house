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

    var showMustHavesHtml = 'Want more Advanced Filters? ' +
      '<span ng-click="toggleAdvanced"><strong>Click Here</strong></span>';
    var hideMustHavesHtml = '<span ng-click="toggleAdvanced">' +
      '<strong>Hide Advanced Filters</strong></span>';

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
            propertyType: 'house',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-bank"></i>Condo',
            propertyType: 'condo',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-building"></i>Apartment',
            propertyType: 'apartment',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }, {
            textHtml: '<i class="fa fa-bank"></i>Townhome',
            propertyType: 'townhome',
            type: 'checkbox',
            class: 'checkbox btn btn-default',
            checked: false,
            action: function(button) {button.checked = !button.checked;}
          }]
        },
        checked: []
      };
    };

    $scope.showMustHaves = false;

    $scope.mustHaves = {
      options: {
        headerText: 'Must Haves',
        type: 'dropdown',
        headerSubtextHtml: $scope.showMustHaves ?
            showMustHavesHtml : hideMustHavesHtml,
        headerSubtextClass: 'subtext filters',
        buttons: [{
          text: 'Bedrooms',
          type: 'dropdown',
          class: ''
        }]
      }
    };



    $timeout(function() {
      controller.fetchData();
    });
  });
