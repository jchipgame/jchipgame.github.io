app.controller('site-header-controll', function($scope) {
    console.log("site_header-controll loading ... ...");
    $scope.goPage = function(page) {
    	console.log("KK page == " + page);
    	$scope.$parent.goPage(page);
    }
});