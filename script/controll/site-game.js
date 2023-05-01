app.controller('site-game-controll', function($scope, gameService) {	
    $scope.stages = null;
    
    $scope.gameIndex = 0;
    $scope.stageIndex = 0;
    $scope.stageCount = 0;
    $scope.stageMatrix = null;
    
    $scope.selectGame = function(gameIndex) {
        $scope.gameIndex = gameIndex;
        $scope.stageIndex = -1;
        $scope.stageMatrix = null;
        if($scope.stages != null) {
            $scope.stageCount = $scope.stages[$scope.gameIndex].length;
        }
    };
    
    $scope.selectStage = function(gameIndex, stageIndex) {
        $scope.gameIndex = gameIndex;
        $scope.stageIndex = stageIndex;
        $scope.stageCount = 0;
        $scope.stageMatrix = null;
        
        if($scope.stages != null) {
            $scope.stageCount = $scope.stages[$scope.gameIndex].length;
            $scope.stageMatrix = $scope.stages[$scope.gameIndex][$scope.stageIndex];
            $scope.loadGame(stageIndex, $scope.stageMatrix);
        }
    };
    
    $scope.loadGame = function(index, matrix) {
     	_load(index, matrix, _element('container'), _element('titler'));
    }
    
    $scope.moveStep = function(step) {
       	if(_toward) _toward(step);
    }
    
    gameService.loadGame().then(function (stages) {
    	$scope.stages = stages;
		$scope.selectStage($scope.gameIndex, $scope.stageIndex); 
	});
});