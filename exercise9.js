var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);

var results = [],
		count = 0;

urls.forEach(function(url, index) {

	http.get(url, function(res, req) {
		res.pipe(bl(function(err, data){
			results[index] = data.toString();
			count++;

			if(count == urls.length) {
				results.forEach(function(result, i){
					console.log(result);
				});
			}

		}));
	});

});