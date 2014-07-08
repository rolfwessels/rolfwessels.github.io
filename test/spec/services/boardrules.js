'use strict';

describe('Service: Boardrules', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Boardrules;
  var defaultBoard;
  beforeEach(inject(function (_Boardrules_,_Generateboard_) {
    Boardrules = _Boardrules_;
    defaultBoard = new _Generateboard_(100,100);
    
  }));

/*
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
  it('given live cell with no neighbours should die', function () {
    var result = Boardrules.isAlive(true,0)
    expect(result).toBe(false);
  });

  it('given live cell with one neighbours should die', function () {
    var result = Boardrules.isAlive(true,1)
    expect(result).toBe(false);
  });

  it('given live  with two or three live neighbours lives on to the next generation', function () {
    var result = Boardrules.isAlive(true,2)
    expect(result).toBe(true);
  });

  it('given live with three live neighbours lives on to the next generation', function () {
    var result = Boardrules.isAlive(true,3)
    expect(result).toBe(true);
  });

  it('Any live cell with more than three live neighbours dies, as if by overcrowding.', function () {
    var result = Boardrules.isAlive(true,4)
    expect(result).toBe(false);
  });

  it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', function () {
    var result = Boardrules.isAlive(false,3)
    expect(result).toBe(true);
  });

  it('Any dead cell with exactly 2 live neighbours stay dead.', function () {
    var result = Boardrules.isAlive(false,2)
    expect(result).toBe(false);
  });

it('Any dead cell with exactly 4 live neighbours stay dead.', function () {
    var result = Boardrules.isAlive(false,4)
    expect(result).toBe(false);
  });


});
