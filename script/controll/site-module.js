var app = angular.module('site-app', []);
app.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
	    for (var i=0; i<total; i++) {
	    	input.push(i);
	    }
	    return input;
	};
});

app.filter('integer', function() {
	return function(value) {
		return parseInt(value);
	};
});