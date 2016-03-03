'use strict';

describe('Directive: dButtonRow', function () {

  // load the directive's module
  beforeEach(module('houseFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d-button-row></d-button-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dButtonRow directive');
  }));
});
