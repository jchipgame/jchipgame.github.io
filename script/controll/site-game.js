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
        if($scope.stages != null) {
            $scope.stageCount = $scope.stages[$scope.gameIndex].length;
            $scope.stageMatrix = $scope.stages[$scope.gameIndex][$scope.stageIndex];
            $scope.loadStage(stageIndex, $scope.stageMatrix);
        }
    };

    $scope.loadStage = function(stageIndex, stageMatrix) {
	    gameService.asynchCall().then(function (response) {
	   		_load(stageIndex, stageMatrix, _element('container'), _element('titler'));
		});
    }

    $scope.initStage = function(gameIndex, stageIndex) {
	    gameService.loadStages().then(function (stages) {
	    	$scope.stages = stages;
			$scope.selectStage(gameIndex, stageIndex); 
		});
    }

    $scope.moveStep = function(step) {
       	if(_toward) _toward(step);
    }
    
    $scope.initStage($scope.gameIndex, $scope.stageIndex);
});