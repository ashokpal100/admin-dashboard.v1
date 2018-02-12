/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
 
(function(){
  angular.module('adminApp')
  .controller('HomeCtrl',['$scope','Notification', function($scope,Notification) {
  console.log("came here HomeCtrl");
  Notification.success({'message':'login successfully...!!!'})
  var pageload = {
        name: 'page.load',
        datapoints: [
            { x: 2001, y: 1012 },
            { x: 2002, y: 1023 },
            { x: 2003, y: 1045 },
            { x: 2004, y: 1062 },
            { x: 2005, y: 1032 },
            { x: 2006, y: 40 },
            { x: 2007, y: 1023 },
            { x: 2008, y: 1090 },
            { x: 2009, y: 10 },
            { x: 2010, y: 1012 },
        ]
    };

    var firstPaint = {
        name: 'page.firstPaint',
        datapoints: [
            { x: 2001, y: 22 },
            { x: 2002, y: 13 },
            { x: 2003, y: 35 },
            { x: 2004, y: 521 },
            { x: 2005, y: 32 },
            { x: 2006, y: 40 },
            { x: 2007, y: 63 },
            { x: 2008, y: 80 },
            { x: 2009, y: 20 },
            { x: 2010, y: 25 },
        ]
    };

    $scope.config = {
        
        title: 'Line Chart',
        subtitle: 'Line Chart Subtitle',
        debug: true,
        showXAxis: true,
        showYAxis: true,
        showLegend: true,
        stack: false,
        dataZoom: {
            show: true,
            start : 70
        },
        toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        },
        calculable : true
    },
    };

    $scope.multiple = [pageload, firstPaint ];
  }]);
})();