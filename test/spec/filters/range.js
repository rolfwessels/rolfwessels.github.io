'use strict';

describe('Filter: range', function () {

  // load the filter's module
  beforeEach(module('lazyCowProjectsApp'));

  // initialize a new instance of the filter before each test
  var range;
  beforeEach(inject(function ($filter) {
    range = $filter('range');
  }));

  it('should return the input as array with x amount of items', function () {
    var text = [];
    expect(range(text,2).length).toBe(2);
  });

});
