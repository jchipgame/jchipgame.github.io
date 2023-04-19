var app = angular.module('site-app', []);
app.controller('download-app-controll', function($scope, $http) {
	  $http.get("data/download-app.json?i=3")
	  .then(function (response) {$scope.apps = response.data.apps;});
	});