app.service('smtpService', function ($q, $http) {
    console.log("site-game-service loading ... ...");
	this.smtp = null;
    this.loadSmtp = function () {
        console.log("siteSmtp service start -- ");
        var deferred = $q.defer();
        if(this.smtp == null) {
	        $http.get("data/site-smtp.json", { cache: false }).then(function (response) {
	            this.smtp = response.data
	            deferred.resolve(this.smtp);
	        });
        } else {
        	deferred.resolve(this.smtp);
        }
        return deferred.promise;
	}
	
	this.send = function(email) {
		console.log("service send email ...");
		this.loadSmtp().then(function (smtp) {
			console.log("smtp.server:" + smtp.server);
			console.log("smtp.user:" + smtp.user.join(''));
			console.log("smtp.token:" + smtp.token);

			console.log("email.address:" + email.address);
			console.log("email.subject:" + email.subject);
			console.log("email.message:" + email.message);
				
			Email.send({
				Host: smtp.server,
	        	Username: smtp.user.join(''),
	        	Password: smtp.token,
				To: smtp.user.join(''),
				From: smtp.user.join(''),
				Subject: email.subject,
				Body: email.address + "\n\n" + email.message,
			}).then(function (message) {
				console.log("mail sent successfully:" + message);
			});
        });
 	}	
});
