app.service('gameService', function ($q, $http) {
    console.log("site-game-service loading ... ...");
	this.stages = null;
    this.loadGame = function (gameIndex) {
        console.log("loadGame start -- " +  gameIndex);
        var deferred = $q.defer();
        console.log("start http load index:" + gameIndex);
        if(this.stages == null) {
        $http.get("data/site-game.json", { cache: false }).then(function (response) {
            this.stages = response.data.stages
            deferred.resolve(this.stages[gameIndex]);
        });
        } else {
        	deferred.resolve(this.stages[gameIndex]);
        }
        return deferred.promise;
	}

});
