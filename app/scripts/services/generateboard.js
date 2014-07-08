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
    	_items : {},
    	add : function (item) {
    		if (angular.isArray(item)) {
                for (var i = 0; i < item.length; i++) {
                    this.add(item[i]);
                };
                return;
            }
            if (item.x >= 0 && item.x < this.width && item.y >= 0 && item.y < this.height ) 
            {
                var key = this.getKey(item);
        		if (!this._items[key]) {
        			this._items[key] = (item);
        		}
            }
    	},
    	
        items : function () {
            var itemList = []
            for (var key in this._items) {
              itemList.push(this._items[key]);
            }
            return itemList;
        },

        clear : function () {
    		this._items = {};
    	},

        getKey : function (position) {
            return position.x+"_"+position.y;
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

        isAlive : function (position) {
            var key = this.getKey(position);
            return (this._items[key])?true:false;
        },

        getLiveNeighbours : function (position) {
            var allLiveItems = this.items();
            var allNeighbours = Enumerable.from(allLiveItems)
                .where(function(i){
                    return !(position.x == i.x && position.y == i.y) 
                    && (i.x >= position.x-1 && i.x <= position.x+1) 
                    && (i.y >= position.y-1 && i.y <= position.y+1) 
                })
                .toArray();
            return allNeighbours;
        },

        getAllDeadNeighbours : function (position) {
            var neighbours = [
                {x:position.x-1,y:position.y-1},
                {x:position.x,y:position.y-1},
                {x:position.x+1,y:position.y-1},

                {x:position.x-1,y:position.y},
                {x:position.x+1,y:position.y},

                {x:position.x-1,y:position.y+1},
                {x:position.x,y:position.y+1},
                {x:position.x+1,y:position.y+1},
            ];
            var self = this;
            
            var allNeighbours = Enumerable.from(neighbours)
                .where(function(i){
                    var key = self.getKey(i);
                    return !self._items[key];
                })
                .toArray();
            return allNeighbours;
        },
        getAllItemsOfInterest : function () {
            var allItems = {};

            for (var key in this._items) {
                var item = this._items[key];
                if (!allItems[key]) {
                    allItems[key] = (item);
                }
                var neighbours = this.getAllDeadNeighbours(item)

                for (var i = 0; i < neighbours.length; i++) {
                    var neighbour = neighbours[i]
                    var nkey = this.getKey(neighbour);
                    if (!allItems[nkey]) {
                    allItems[nkey] = (neighbour);
                }};
            }


            var itemList = []
            for (var key in allItems) {
              itemList.push(allItems[key]);
            }
            return itemList;

        }
        };
    };
  });
