'use strict';

describe('Directive: lineGraph', function () {

  // load the directive's module
  beforeEach(module('crosschxCodeTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<line-graph></line-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lineGraph directive');
  }));
});
