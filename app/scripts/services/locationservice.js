'use strict';

/**
 * @ngdoc service
 * @name houseFinderApp.locationService
 * @description
 * # locationService
 * Service in the houseFinderApp.
 */
angular.module('houseFinderApp')
  .service('locationService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var locationService = {
      ipapi: {
        get: function() {
          var promise = $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
          }).then(function successCallBack(response) {
            return response;
          }, function errorCallBack(response) {
            return response;
          });

          return promise;
        }
      }
    };

    return locationService;
  });
