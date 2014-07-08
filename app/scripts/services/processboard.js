'use strict';

/**
 * @ngdoc service
 * @name lazyCowProjectsApp.Processboard
 * @description
 * # Processboard
 * Service in the lazyCowProjectsApp.
 */
angular.module('lazyCowProjectsApp')
  .service('Processboard', function Processboard() {
    return {
    	processBoard : function (board) {
    		return [];
    	}
    }
  });
