'use strict';

/**
 * @ngdoc service
 * @name lazyCowProjectsApp.Generateboard
 * @description
 * # Generateboard
 * Service in the lazyCowProjectsApp.
 */
angular.module('lazyCowProjectsApp')
  .service('Generateboard', function Generateboard() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function (width,height) {
    	return {
    	width:width,
    	height:height,
    	items : []
	    };
    };
  });
