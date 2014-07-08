'use strict';

/**
 * @ngdoc service
 * @name lazyCowProjectsApp.Boardrules
 * @description
 * # Boardrules
 * Service in the lazyCowProjectsApp.
 */
angular.module('lazyCowProjectsApp')
  .service('Boardrules', function Boardrules() {
    return {
    	isAlive : function (isAlive,liveNeigbours) {
    		return (isAlive && liveNeigbours == 2 || liveNeigbours == 3) || (!isAlive  && liveNeigbours == 3);
    	}
    }
  });
