'use strict';

/**
 * @ngdoc function
 * @name lazyCowProjectsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lazyCowProjectsApp
 */
angular.module('lazyCowProjectsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
