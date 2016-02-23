'use strict';

describe('Controller: HousefinderCtrl', function () {

  // load the controller's module
  beforeEach(module('houseFinderApp'));

  var HousefinderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HousefinderCtrl = $controller('HousefinderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HousefinderCtrl.awesomeThings.length).toBe(3);
  });
});
