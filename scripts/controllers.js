angular.module('infoWeatherApp')

	.controller('SearchController', function ($location){
		var self = this;

		self.query = '';

		self.cities = ['atlanta', 'boston', 'madrid'];

		self.getQuery = function(){
			console.log('button clicked!');
			var query = self.query;
			console.log(query);
			$location.path('/results/' + query);
		}

	})

	.controller('ResultsController', function(WeatherService, $routeParams){
		var self = this;

		var query = $routeParams.query;
		
		WeatherService.search(query, function(response){
			
			self.city = response;

			self.iconUrl = 'http://openweathermap.org/img/w/';
            self.iconUrl += response.data.weather["0"].icon + '.png';


		});
	})
	.controller('ThumbnailsController', function(WeatherService){

		//TODO controller for thumbnails
		WeatherService.search(paris, function(response){
			self.paris = response;
		})


	});


