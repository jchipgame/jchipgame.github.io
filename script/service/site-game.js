app.service('gameService', function ($q, $http) {
    console.log("site-game-service loading ... ...");

    this.loadGame = function (gameIndex) {
        console.log("load start loading -- " +  this.gameIndex);

        var deferred = $q.defer();
        console.log("no data, start http load index:" + this.gameIndex);
        $http.get("data/site-game.json?i=2", { cache: false }).then(function (response) {
  //     	this.gameStages = response.data.stages;
            console.log("service json data -- " +  response.data.stages);
        	
            deferred.resolve(response.data.stages[gameIndex]);
        });
        return deferred.promise;
	}

});
