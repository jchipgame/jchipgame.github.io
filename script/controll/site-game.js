app.controller('site-game-controll', function($scope, gameService) {
	
    console.log("site-game-controll loading");
    	
    $scope.gameIndex = 0;
    $scope.stageIndex = -1;
    $scope.stageCount = 0;
    $scope.stageMatrix = null;
    
    $scope.data = [
        [], [], [], [], [], [], [], [], []
    ];

	
    $scope.selectGame = function(gameIndex) {
        $scope.gameIndex = gameIndex;
        $scope.stageIndex = -1;
        $scope.stageMatrix = null;
        gameService.loadGame($scope.gameIndex).then(function (response) {
            console.log("UU game gameIndex:" +  $scope.gameIndex);
            var stages = response;
            console.log("UU payload data:" +  stages);
            $scope.stageCount = stages.length;
            console.log("UU $scope.stageCount:" + $scope.stageCount);
        });
    };
    
    $scope.selectStage = function(gameIndex, stageIndex) {
        $scope.stageIndex = stageIndex;
        gameService.loadGame($scope.gameIndex).then(function (response) {
            console.log("UU game gameIndex:" +  $scope.gameIndex);
            var stages = response;
            console.log("UU payload data:" +  stages);
            console.log("UU $scope.stageIndex:" +  $scope.stageIndex);
            $scope.stageCount = stages.length;
            $scope.stageMatrix = stages[$scope.stageIndex];
            console.log("UUX $scope.stageCount:" + $scope.stageCount);
            console.log("UUX $scope.stageMatrix:" + $scope.stageMatrix);
            
            $scope.loadGame($scope.stageMatrix);
        });
    };
    
    $scope.loadGame = function(matrix) {
    	_load(matrix, _element('container'), _element('titler'));
    }
    
    $scope.selectStage(0, 0);
});