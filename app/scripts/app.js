'use strict';

/**
 * @ngdoc overview
 * @name lazyCowProjectsApp
 * @description
 * # lazyCowProjectsApp
 *
 * Main module of the application.
 */
angular
  .module('lazyCowProjectsApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/conwaygameoflife', {
        templateUrl: 'views/conwaygameoflife.html',
        controller: 'ConwaygameoflifeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
