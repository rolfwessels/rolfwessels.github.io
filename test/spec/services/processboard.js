'use strict';

describe('Service: Processboard', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Processboard;
  var defaultBoard ;
  var generateBoardMock;
  
   beforeEach(function () {

       generateBoardMock = function () {

       };

           module(function ($provide) {
           $provide.value('GenerateBoard', generateBoardMock);
       });

   });



  beforeEach(inject(function (_Processboard_,_Generateboard_) {
    Processboard = _Processboard_;
    defaultBoard = new _Generateboard_(100,100);
  }));

  it('contructor should work', function () {
    var processBoard = Processboard;
    expect(!!processBoard).toBe(true);
  });

  it('processBoard should remove items that do not meet criteria', function () {
    var processBoard = Processboard;
    defaultBoard.add({x:1,y:1});
    var items = processBoard.processBoard(defaultBoard);
    expect(items.length).toBe(0);
  });

  it('contructor should work', function () {
    var processBoard = Processboard;
    defaultBoard.add({x:0,y:1});
    defaultBoard.add({x:1,y:1});
    defaultBoard.add({x:2,y:1});
    var items = processBoard.processBoard(defaultBoard);
    expect(items.length).toBe(3);
  });

});
