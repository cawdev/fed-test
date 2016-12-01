'use strict';

/**
 * @ngdoc overview
 * @name crosschxCodeTestApp
 * @description
 * # crosschxCodeTestApp
 *
 * Main module of the application.
 */
angular
  .module('crosschxCodeTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
