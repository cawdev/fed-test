'use strict';

/**
 * @ngdoc function
 * @name crosschxCodeTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crosschxCodeTestApp
 */

 /* NOTE:
    
 */
angular.module('crosschxCodeTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('companydata.json').success(function(data) {
	   $scope.companydata = data;
	});
  });
