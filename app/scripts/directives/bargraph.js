'use strict';

/**
 * @ngdoc directive
 * @name crosschxCodeTestApp.directive:barGraph
 * @description
 * # barGraph
 */
angular.module('crosschxCodeTestApp')
  .directive('barGraph', function ($window) {
    var directiveDefinitionObject = {
         restrict: 'A',
         replace: false,
         scope: {data: '=chartData'},
         link: function (scope, element) {
           var d3 = $window.d3;
           var chart = d3.select(element[0]);
            chart.append('div').attr('class', 'chart')
             .selectAll('div')
             .data(scope.data).enter().append('div')
             .transition().ease('elastic')
             .style('width', function(d) { return d + '%'; })
             .text(function(d) { return d[0][1]; });
         } 
      };
      return directiveDefinitionObject;
  });
