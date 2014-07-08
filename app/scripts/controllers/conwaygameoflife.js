'use strict';

/**
 * @ngdoc function
 * @name lazyCowProjectsApp.controller:ConwaygameoflifeCtrl
 * @description
 * # ConwaygameoflifeCtrl
 * Controller of the lazyCowProjectsApp
 */
angular.module('lazyCowProjectsApp')
  .controller('ConwaygameoflifeCtrl', function ($scope, $timeout) {
    $scope.board = {
    	width:10,
    	height:10,
    	items : [
    		{x:1,y:1},{x:3,y:2},
    		{x:2,y:5},{x:6,y:3}
    	],
    	draw : function () {
			for (var i = this.items.length - 1; i >= 0; i--) {
				var item =  this.items[i];
				var itemId = '#cell_'+item.x+'_'+item.y;
				var element = angular.element(document.querySelector(itemId));
				element.addClass('alive');
			}
    	}
    };

    $scope.start = function () {
    	$timeout(function () {
    		$scope.board.draw();	
    	},100);
    };

     

  });
