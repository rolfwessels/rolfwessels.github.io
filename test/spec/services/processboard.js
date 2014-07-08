'use strict';

describe('Service: Processboard', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Processboard;
  beforeEach(inject(function (_Processboard_) {
    Processboard = _Processboard_;
  }));

  it('should do something', function () {
    expect(!!Processboard).toBe(true);
     
  });


});
