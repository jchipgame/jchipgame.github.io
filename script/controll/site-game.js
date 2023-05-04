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
            $scope.loadStage();
        }
    };

    $scope.initStage = function(gameIndex, stageIndex) {
	    gameService.loadStages().then(function (stages) {
	    	$scope.stages = stages;
			$scope.selectStage(gameIndex, stageIndex); 
		});
    }
    
    $scope.loadStage = function() {
	    gameService.asynchCall(function() {
	    	_load($scope.stageIndex, $scope.stageMatrix, _element('container'), _element('titler'), $scope.onSuccess, $scope.keyPress); 
	    });
    }

    $scope.moveStep = function(step) {
       	if(_toward) _toward(step);
    }

    $scope.keyPress = function(ev) {
       	if(ev.keyCode == 33 && ev.altKey && $scope.stageIndex > 0) {
      		$scope.selectStage($scope.gameIndex, $scope.stageIndex - 1);
       	} else if(ev.keyCode == 34 && ev.altKey && $scope.stageIndex < $scope.stageCount - 1) {
      		$scope.selectStage($scope.gameIndex, $scope.stageIndex + 1);
      	}
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