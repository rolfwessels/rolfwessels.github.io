'use strict';

describe('Service: Processboard', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Processboard;
  var defaultBoard ;
  beforeEach(inject(function (_Processboard_) {
    Processboard = _Processboard_;
    defaultBoard = {
      width: 100,
      height:100,
      items : []
    };
  }));

  it('contructor should work', function () {
    var processBoard = Processboard;
    expect(!!processBoard).toBe(true);
  });

  it('contructor should work', function () {
    var processBoard = Processboard;
    var items = processBoard.processBoard(defaultBoard);
    expect(items.length).toBe(0);
  });

  it('contructor should work', function () {
    var processBoard = Processboard;
    defaultBoard.items.push({x:1,y:1});
    var items = processBoard.processBoard(defaultBoard);
    expect(items.length).toBe(0);
  });

  it('contructor should work', function () {
    var processBoard = Processboard;
    defaultBoard.items.push({x:1,y:1},{x:1,y:2});
    var items = processBoard.processBoard(defaultBoard);
    expect(items.length).toBe(0);
  });

});
