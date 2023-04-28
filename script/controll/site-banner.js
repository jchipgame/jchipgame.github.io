app.controller('site-banner-controll', function($scope, $http) {
    console.log("site-banner-controll loading");

	$http.get("data/site-download.json?i=0")
		.then(function (response) {
			$scope.apps = response.data.apps;
		});
});