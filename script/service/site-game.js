app.service('gameService', function ($http) {
    console.log("gameService loading");

    this.gameIndex = 0;
    this.stageIndex = -1;

    this.loadGame = function (gameIndex) {
        console.log("laod start loading");

        this.gameIndex = gameIndex;
        console.log("load start loading -- " +  this.gameIndex);

        if(!this.data) {
            console.log("no data, start http load index:" + this.gameIndex);
            this.data = $http.get("data/site-game.json?i=0").data;
            console.log("length:" + this.data);
                   // console.log("data: " + Object.prototype.toStrinRg.call( this.data[this.gameIndex]));
            return this.data[this.gameIndex];
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
    	return stages.length;
	}

});
