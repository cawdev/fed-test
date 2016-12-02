'use strict';

/**
 * @ngdoc directive
 * @name crosschxCodeTestApp.directive:lineGraph
 * @description
 * # lineGraph
 */
angular.module('crosschxCodeTestApp')
  .directive('lineGraph', function ($window) {
    return {
      restrict:'A',
      template:'<svg width="650" height="200"></svg>',
       link: function(scope, elem, attrs) {
           	var visitsDataToPlot = scope[attrs.chartData],
				        padding = 20,
			          pathClass = 'path',
			          xScale, yScale, xAxisGen, yAxisGen, graphLine, area,
				        d3 = $window.d3,
				        rawSvg = elem.find('svg'),
				        svg = d3.select(rawSvg[0]);

           	function setChartParameters() {

               	xScale = d3.scale.linear()
                   	.domain([visitsDataToPlot[0].monthByNum, visitsDataToPlot[visitsDataToPlot.length-1].monthByNum])
                   	.range([padding + 5, rawSvg.attr('width') - padding]);

               	yScale = d3.scale.linear()
                   	.domain([0, d3.max(visitsDataToPlot, function (d) {
                       return d.visits;
                   	})])
                   	.range([rawSvg.attr('height') - padding, 0]);

               	xAxisGen = d3.svg.axis()
                   	.scale(xScale)
                   	.orient('bottom')
                   	.ticks(visitsDataToPlot.length - 1)
                   	.tickFormat(function(d) {
				      	// display correct month from monthByNum
				      	return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d]; 
				    });

               	yAxisGen = d3.svg.axis()
                   	.scale(yScale)
                   	.orient('left')
                   	.ticks(5);

                area = d3.svg.area()
                    .x(function (d) {
                      return xScale(d.monthByNum);
                    })
                    .y0(175)
                    .y1(function (d) {
                      return yScale(d.visits);
                    });

               	graphLine = d3.svg.line()
                   	.x(function (d) {
                      return xScale(d.monthByNum);
                   	})
                   	.y(function (d) {
                      return yScale(d.visits);
                   	});
           	}
         
	          function drawLineChart() {

                setChartParameters();

                svg.append('svg:g')
                   	.attr('class', 'x axis')
                   	.attr('transform', 'translate(0,0)')
                   	.call(xAxisGen);

                svg.append('svg:g')
                   	.attr('class', 'y axis')
                   	.attr('transform', 'translate(20,0)')
                   	.call(yAxisGen);

                svg.append('path')
                    .datum(visitsDataToPlot)
                    .attr('class', 'area')
                    .attr('d', area);

                svg.append('svg:path')
                   	.attr({
                      d: graphLine(visitsDataToPlot),
                      'stroke': '#00aeff',
                      'stroke-width': 2,
                      'fill': 'none',
                      'class': pathClass
                   	});
	           }

           drawLineChart();
       }
   };
 });
