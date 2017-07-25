angular.module('infoWeatherApp')
	
	.service('WeatherService', function($http) {
		var self = this;
		self.search = function(city, callback){
			self.city = city;
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=68d52a9f0d93266ba323fbb2e254f29d&units=metric';
			$http.get(url)
			.then(function(response){
				console.log("succes");
				console.log("el servicio tiene respuesta" + response);
				callback(response);
			})

		}, function error(response){
			console.error("ko" + response);
		}



	});