app.controller('site-game-controll', function($scope, gameService) {	
    $scope.gameIndex = 0;
    $scope.stageIndex = -1;
    $scope.stageCount = 0;
    $scope.stageMatrix = null;
    
    $scope.selectGame = function(gameIndex) {
        $scope.gameIndex = gameIndex;
        $scope.stageIndex = -1;
        $scope.stageCount = 0;
        $scope.stageMatrix = null;
        gameService.loadGame($scope.gameIndex).then(function (stages) {
            $scope.stageCount = stages.length;
            console.log("UU $scope.stageCount:" + $scope.stageCount);
            console.log("UU $scope.stageIndex:" + $scope.stageIndex);
        });
    };
    
    $scope.selectStage = function(gameIndex, stageIndex) {
        $scope.gameIndex = gameIndex;
        $scope.stageIndex = stageIndex;
        $scope.stageCount = 0;
        $scope.stageMatrix = null;
        gameService.loadGame($scope.gameIndex).then(function (stages) {
            $scope.stageCount = stages.length;
            $scope.stageMatrix = stages[$scope.stageIndex];
            console.log("UUX $scope.stageCount:" + $scope.stageCount);
            console.log("UUX $scope.stageMatrix:" + $scope.stageMatrix);
            console.log("UUX $scope.stageIndex:" + $scope.stageIndex);
            $scope.loadGame(stageIndex, $scope.stageMatrix);
        });
    };
    
    $scope.loadGame = function(index, matrix) {
    	_load(index, matrix, _element('container'), _element('titler'));
    }
    
    $scope.selectStage(0, 0);
});