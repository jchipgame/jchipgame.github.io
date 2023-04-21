app.controller('site-game-controll', function($scope, gameService) {
	
    console.log("site-game-controll loading");
    	
    $scope.gameIndex = 0;
    $scope.stageIndex = -1;
    $scope.stageCount = 0;
    $scope.stageMatrix = null;
    
    $scope.data = [
        [], [], [], [], [], [], [], [], []
    ];

	
    $scope.selectGame = function(index) {
        $scope.gameIndex = index;
        $scope.stageIndex = -1;
        $scope.stageMatrix = null;
        console.log("game gameIndex:" +  $scope.gameIndex );
        $scope.stageCount = gameService.getStageCount(index, -1);
        console.log("game stageCount:" +  $scope.stageCount );
    };
    
    $scope.selectStage = function(index) {
        $scope.stageIndex = index;
        $scope.stageMatrix = gameService.getStage($scope.stageIndex, $scope.stageIndex);
        console.log("game stageMatrix:" +  $scope.stageMatrix );
        
    };
    
    $scope.selectGame(0);
    $scope.selectStage(0);
    
	_load($scope.stageMatrix, _element('container'), _element('titler'));

});