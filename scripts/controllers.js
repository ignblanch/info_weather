angular.module('infoWeatherApp')

	.controller('SearchController', function (WeatherService, $location){
		var self = this;

		self.query = '';

		self.getQuery= function(){
			var query = self.query
			$location.path('/search/' + query);
		}

	})

	.controller('ResultsController', function(WeatherService, $routeParams){
		var self = this;
		var city = $routeParams.query;
		WeatherService.search(city, function(response){
			self.data = response;
			console.log("controlador ha recibido datos" + data);
		})
	});


