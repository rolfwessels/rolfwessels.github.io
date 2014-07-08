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
    function random (from,to) {
    	return Math.floor((Math.random() * to) + from);
    }

    return function (width,height) {
    	return {
    	width:width,
    	height:height,
    	items : [],
    	add : function (item) {
    		
    		this.items.push(item);
    	},
    	clear : function () {
    		this.items = [];
    	},
    	randomize : function (count) {
    		this.clear();
    		for (var i = count - 1; i >= 0; i--) {
    			var generated = {
    				x:random(0,this.width),
    				y:random(0,this.height)
    			};
    			this.add(generated);
    		}
    	},
	    };
    };
  });
