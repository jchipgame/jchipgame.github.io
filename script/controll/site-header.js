app.controller('site-header-controll', function($scope) {
    console.log("site_header-controll loading ... ...");
    $scope.goPage = function(page) {
    	$scope.$parent.goPage(page);
    }
    
    $scope.send = function(email) {
	console.log("222")
	console.log("222" +  email.address);
	console.log("222" +  email.message);
		console.log("222")
		
		 var mailSplitted = ['mail', 'to:jchip', 'game@', 'gma', 'il.com'];
          var link = mailSplitted.join('');
		console.log("link=="+link);
		
		window.open(link+'?subject='+'From JChipGame.com'+'&body=From:'+email.address+'\n'+email.message);
	}
});