'use strict';

describe('Service: Generateboard', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Generateboard;
  beforeEach(inject(function (_Generateboard_) {
    Generateboard = _Generateboard_;
  }));

  it('should return function what generates clean board', function () {
    var board = Generateboard(100.100);
    expect(board.items.length).toBe(0);
  });

  it('should with correct width and height', function () {
    var board = Generateboard(101,102);
    expect(board.width).toBe(101);
    expect(board.height).toBe(102);
  });


});
