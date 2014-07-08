'use strict';

/**
 * @ngdoc filter
 * @name lazyCowProjectsApp.filter:range
 * @function
 * @description
 * # range
 * Filter in the lazyCowProjectsApp.
 */
angular.module('lazyCowProjectsApp')
  .filter('range', function () {
    return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++) {
      input.push(i);
  	}
    return input;
  };  
});
