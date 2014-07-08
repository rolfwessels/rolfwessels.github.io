'use strict';

/**
 * @ngdoc function
 * @name lazyCowProjectsApp.controller:ConwaygameoflifeCtrl
 * @description
 * # ConwaygameoflifeCtrl
 * Controller of the lazyCowProjectsApp
 */
angular.module('lazyCowProjectsApp')
  .controller('ConwaygameoflifeCtrl', function ($scope, $timeout ,Generateboard) {
    $scope.board = new Generateboard(10,10);

 	$scope.board.draw = function () {
			for (var i = this.items.length - 1; i >= 0; i--) {
				var item =  this.items[i];
				var itemId = '#cell_'+item.x+'_'+item.y;
				var element = angular.element(document.querySelector(itemId));
				element.addClass('alive');
			}
    	};

    $scope.start = function () {
    	$timeout(function () {
    		$scope.board.randomize(10);
    		$scope.board.draw();	
    	},100);
    };

     

  });
