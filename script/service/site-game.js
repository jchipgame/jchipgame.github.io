app.service('gameService', function ($q, $http) {
    console.log("site-game-service loading ... ...");

    this.loadGame = function (gameIndex) {
        console.log("loadGame start -- " +  gameIndex);
        var deferred = $q.defer();
        console.log("no data, start http load index:" + gameIndex);
        $http.get("data/site-game.json?i=2", { cache: false }).then(function (response) {
            console.log("service site-game.json data = " +  response.data.stages);
            deferred.resolve(response.data.stages[gameIndex]);
        });
        return deferred.promise;
	}

});
