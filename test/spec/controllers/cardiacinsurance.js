'use strict';

describe('Controller: CardiacinsuranceCtrl', function () {

  // load the controller's module
  beforeEach(module('crosschxCodeTestApp'));

  var CardiacinsuranceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardiacinsuranceCtrl = $controller('CardiacinsuranceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardiacinsuranceCtrl.awesomeThings.length).toBe(3);
  });
});
