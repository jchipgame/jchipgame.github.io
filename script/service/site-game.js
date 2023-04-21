app.service('gameService', function ($q, $http) {
    console.log("site-game-service loading ... ...");

    this.gameIndex = 0;
    this.stageIndex = -1;
    this.gameStages = null;
    
//    $http.get("data/site-game.json?i=0", { cache: false })
//    	.then(function (response) {
//    		this.gameStages = response.data.stages;
//    		console.log("XXX:" + response.data);
//    		console.log("XXX:" + response.data.stages);
//    	});
    

    this.loadGame = function (gameIndex) {
        console.log("laod start loading");

        this.gameIndex = gameIndex;
        console.log("load start loading -- " +  this.gameIndex);

        if(!this.data) {
        	   var deferred = $q.defer();
            console.log("no data, start http load index:" + this.gameIndex);
            $http.get("data/site-game.json?i=0", { cache: false }).then(function (response) {
            	this.gameStages = response.data.stages;
                console.log("XXXX  :" + response.data);
                console.log("UUUU  :" + response.data.stages);
                deferred.resolve(response.data.stages);
            });
        //    console.log("length:" + data);
          //  console.log("length:" + data.stages);
        return deferred.promise;
               
    //   return data;
            
//            this.data = $http.get("data/site-game.json?i=0");
//            console.log("length:" + this.data);
//            console.log("length:" + this.data.stages);
//                   // console.log("data: " + Object.prototype.toStrinRg.call( this.data[this.gameIndex]));
//            return this.data[this.gameIndex];
        } else {
            console.log("existing data, nothing to do");
        }
        return null;
	}

    this.getStage = function (gameIndex, stageIndex) {
        this.stageIndex = stageIndex;
        var stages = this.loadGame(gameIndex);
    	return stages[this.stageIndex];
	}

    this.getStageCount = function (gameIndex) {
        var stages = this.loadGame(gameIndex);
        console.log("stages.length="+stages.length);
        return stages.length;
	}

});
