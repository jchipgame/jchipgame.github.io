app.controller('download-app-controll', function($scope, $http) {
    console.log("download-app-controll loading");

	
	
	$http.get("data/download-app.json?i=0")
		.then(function (response) {$scope.apps = response.data.apps;});
});