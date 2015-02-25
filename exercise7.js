var http = require('http');

http.get(process.argv[2], function(res, req){
	res.setEncoding('utf-8');
	res.on("data", function(data) {
		console.log(data);
	});
});