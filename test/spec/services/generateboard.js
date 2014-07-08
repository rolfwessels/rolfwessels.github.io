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
    var board = new Generateboard(100.100);
    expect(board.items.length).toBe(0);
  });

  it('should with correct width and height', function () {
    var board = new Generateboard(101,102);
    expect(board.width).toBe(101);
    expect(board.height).toBe(102);
  });

  it('should provide method to randomize the board', function () {
    var board = new Generateboard(101,102);
    board.randomize(5);
    expect(board.items.length).toBe(5);
  });

  it('given random twise should only run it once', function () {
    var board = new Generateboard(101,102);
    board.randomize(5);
    board.randomize(5);
    expect(board.items.length).toBe(5);
  });


  it('given duplicate adds should only add once', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:1,y:1});
    expect(board.items.length).toBe(1);
  });

});
