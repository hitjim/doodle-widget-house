'use strict';

describe('Directive: dFaCheckbox', function () {

  // load the directive's module
  beforeEach(module('houseFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d-fa-checkbox></d-fa-checkbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dFaCheckbox directive');
  }));
});
