'use strict';

describe('Controller: ConwaygameoflifeCtrl', function () {

  // load the controller's module
  beforeEach(module('lazyCowProjectsApp'));

  var ConwaygameoflifeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConwaygameoflifeCtrl = $controller('ConwaygameoflifeCtrl', {
      $scope: scope
    });
  }));

  it('should introduce width and heigh', function () {
    expect(scope.board.width).toBe(10);
    expect(scope.board.height).toBe(10);
  });
});
