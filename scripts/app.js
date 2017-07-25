angular.module('infoWeatherApp', ['ngRoute'])
	
	.config( function( $routeProvider ) {

    $routeProvider
      .when('/', {
        templateUrl: '../Views/search.html',
        //controller: 'SearchController'
     })
      .when('/results/:query', {
        templateUrl: '../Views/results.html',
       //controller: 'ResultsController'
     })

  });