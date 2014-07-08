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
    expect(board.items().length).toBe(0);
  });

  it('should with correct width and height', function () {
    var board = new Generateboard(101,102);
    expect(board.width).toBe(101);
    expect(board.height).toBe(102);
  });
 
  it('should provide method to randomize the board', function () {
    var board = new Generateboard(101,102);
    board.randomize(5);
    expect(board.items().length).toBe(5);
  });

  it('given random twise should only run it once', function () {
    var board = new Generateboard(101,102);
    board.randomize(5);
    board.randomize(5);
    expect(board.items().length).toBe(5);
  });

  it('given duplicate adds should only add once', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:1,y:1});
    expect(board.items().length).toBe(1);
  });

  it('getLiveNeighbours given item should return neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual([{x:2,y:1}]);
  });

  it('getLiveNeighbours given 2 neighbours should return all neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    board.add({x:1,y:2});
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual([{x:2,y:1},{x:1,y:2}]);
  });

  it('getLiveNeighbours given 8 neighbours should return all neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:0,y:0});
    board.add({x:1,y:0});
    board.add({x:2,y:0});
    board.add({x:0,y:1});
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    board.add({x:0,y:2});
    board.add({x:1,y:2});
    board.add({x:2,y:2});
    var result = [
      {x:0,y:0},
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:2,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:2,y:2}
    ]
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual(result);
  });

  it('getLiveNeighbours given 8 neighbours and one more should return all neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:0,y:0});
    board.add({x:1,y:0});
    board.add({x:2,y:0});
    board.add({x:3,y:0});
    board.add({x:0,y:1});
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    board.add({x:0,y:2});
    board.add({x:1,y:2});
    board.add({x:2,y:2});
    var result = [
      {x:0,y:0},
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:2,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:2,y:2}
    ]
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual(result);
  });


  it('getLiveNeighbours given 8 neighbours and one more should return all neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:0,y:0});
    board.add({x:1,y:0});
    board.add({x:2,y:0});
    board.add({x:3,y:0});
    board.add({x:0,y:1});
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    board.add({x:0,y:2});
    board.add({x:1,y:2});
    board.add({x:2,y:2});
    board.add({x:1,y:3});
    var result = [
      {x:0,y:0},
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:2,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:2,y:2}
    ]
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual(result);
  });

  it('getLiveNeighbours given 2 neighbours and one way out should return all neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:2,y:1});
    board.add({x:1,y:2});
    board.add({x:45,y:66});
    expect(board.getLiveNeighbours({x:1,y:1})).toEqual([{x:2,y:1},{x:1,y:2}]);
  });

  it('getAllDeadNeighbours when no neighbours should return 8 items', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:45,y:66});
    expect(board.getAllDeadNeighbours({x:1,y:1}).length).toEqual(8);
  });

   it('getAllDeadNeighbours when two neighbours should retun 6 items', function () {
    var board = new Generateboard(101,102);
    board.add({x:0,y:0});
    board.add({x:1,y:1});
    board.add({x:1,y:2});
    board.add({x:45,y:66});
    expect(board.getAllDeadNeighbours({x:1,y:1}).length).toEqual(6);
  });


  it('getAllDeadNeighbours when no neighbours should retun all', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:45,y:66});
    var result = [
      {x:0,y:0},
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:2,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:2,y:2}
    ]
    expect(board.getAllDeadNeighbours({x:1,y:1})).toEqual(result);
  });
 
  it('getAllDeadNeighbours when has 2 neighbours should retun only non neighbours', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:0,y:0});
    board.add({x:1,y:2});
    board.add({x:45,y:66});
    var result = [
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:2,y:1},
      {x:0,y:2},      
      {x:2,y:2}
    ]
    expect(board.getAllDeadNeighbours({x:1,y:1})).toEqual(result);
  });

  it('getAllItemsOfInterest should return all 9 items including the selected item', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});


    expect(board.getAllItemsOfInterest().length).toEqual(9);
  });

 it('getAllItemsOfInterest should return all 18 items including the tow selected items', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:5,y:5});
    expect(board.getAllItemsOfInterest().length).toEqual(18);
  });

 it('getAllItemsOfInterest should return all 12 items including the two items next to each other', function () {
    var board = new Generateboard(101,102);
    board.add({x:1,y:1});
    board.add({x:2,y:1});    
    expect(board.getAllItemsOfInterest().length).toEqual(12);
  });

});
