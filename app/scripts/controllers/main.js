'use strict';

/**
 * @ngdoc function
 * @name lazyCowProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lazyCowProjectsApp
 */
angular.module('lazyCowProjectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
