'use strict';

/**
 * @ngdoc function
 * @name lazyCowProjectsApp.controller:ConwaygameoflifeCtrl
 * @description
 * # ConwaygameoflifeCtrl
 * Controller of the lazyCowProjectsApp
 */
angular.module('lazyCowProjectsApp')
  .controller('ConwaygameoflifeCtrl', function ($scope, $timeout, $interval ,Generateboard,Processboard) {
    $scope.board = new Generateboard(30,30);

 	$scope.board.draw = function (previousItems) {
        var self = this;
        var items = this.items();
            var allDead = Enumerable.from(previousItems)
                .where(function(i){
                    return !self.isAlive(i);
                })
                .toArray();
            for (var i = 0; i < allDead.length; i++) {
                var item =  allDead[i];
                var itemId = '#cell_'+item.x+'_'+item.y;
                var element = angular.element(document.querySelector(itemId));
                element.removeClass('alive');
            };
			for (var i = items.length - 1; i >= 0; i--) {
				var item =  items[i];
				var itemId = '#cell_'+item.x+'_'+item.y;
				var element = angular.element(document.querySelector(itemId));
				element.addClass('alive');
			}
    	};

    $scope.start = function () {
    	$timeout(function () {
    		$scope.board.randomize(($scope.board.width * $scope.board.height)/2.5);
            //$scope.board.add([{x:1,y:1}]);
    		$scope.board.draw([]);	
    	},100);
    };

    var stop = $interval(function() {
        var found = Processboard.processBoard($scope.board);
        var previousItems = $scope.board.items();
        $scope.board.clear();
        $scope.board.add(found);
        $scope.board.draw(previousItems);
      }, 100);
     

  });
