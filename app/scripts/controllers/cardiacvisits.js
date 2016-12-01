'use strict';

/**
 * @ngdoc function
 * @name crosschxCodeTestApp.controller:CardiacvisitsCtrl
 * @description
 * # CardiacvisitsCtrl
 * Controller of the crosschxCodeTestApp
 */
angular.module('crosschxCodeTestApp')
  .controller('CardiacVisitsCtrl', ['$scope', function ($scope) {
  	$scope.visitsData = [
  		{monthByNum: 0,visits: 6},
	    {monthByNum: 1,visits: 7},
	    {monthByNum: 2,visits: 8},
	    {monthByNum: 3,visits: 6},
	    {monthByNum: 4,visits: 6},
	    {monthByNum: 5,visits: 6},
	    {monthByNum: 6,visits: 8},
	    {monthByNum: 7,visits: 9},
	    {monthByNum: 8,visits: 7},
	    {monthByNum: 9,visits: 8},
	    {monthByNum: 10,visits: 7},
	    {monthByNum: 11,visits: 6},
	  ];
  }]);
