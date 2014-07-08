'use strict';

describe('Service: Boardrules', function () {

  // load the service's module
  beforeEach(module('lazyCowProjectsApp'));

  // instantiate service
  var Boardrules;
  beforeEach(inject(function (_Boardrules_) {
    Boardrules = _Boardrules_;
  }));

  it('should do something', function () {
    expect(!!Boardrules).toBe(true);
  });

});
