'use strict';

/**
 * @ngdoc service
 * @name lazyCowProjectsApp.Processboard
 * @description
 * # Processboard
 * Service in the lazyCowProjectsApp.
 */
angular.module('lazyCowProjectsApp')
  .service('Processboard' , function Processboard(Boardrules) {
    return {
    	processBoard : function (board) {
    		var itemsIfInterest = board.getAllItemsOfInterest();
    		var result = [];
    		for (var i = 0; i < itemsIfInterest.length; i++) {
    			var item = itemsIfInterest[i]
    			var wasalive = board.isAlive(item);
    			var liveNeighbours = board.getLiveNeighbours(item).length;
    			var isAlive = Boardrules.isAlive(wasalive,liveNeighbours)

    			//.onsole.log(wasalive,liveNeighbours,isAlive,item);
    			if (isAlive) {
    				result.push(item);
    			}
    		};
    		return result;
    	}
    }
  });
