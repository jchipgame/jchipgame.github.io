app.controller('site-game-controll', function($scope, $document, gameService) {	
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
            $scope.loadStage(stageIndex, $scope.stageMatrix, $scope.onSuccess);
        }
    };

    $scope.initStage = function(gameIndex, stageIndex) {
	    gameService.loadStages().then(function (stages) {
	    	$scope.stages = stages;
			$scope.selectStage(gameIndex, stageIndex); 
		});
    }
    
    $scope.loadStage = function(stageIndex, stageMatrix, onSuccess) {
	    gameService.asynchCall(function() {
	    	_load(stageIndex, stageMatrix, _element('container'), _element('titler'), onSuccess) 
	    });
    }

    $scope.moveStep = function(step) {
       	if(_toward) _toward(step);
    }

    $scope.onSuccess = function() {
		var modal = new bootstrap.Modal($document[0].querySelector('#successModal'));
		modal.show();
	}
    
    $scope.goNext = function() {
       	$scope.selectStage($scope.gameIndex, $scope.stageIndex + 1);
    }
    
    $scope.initStage($scope.gameIndex, $scope.stageIndex);
});