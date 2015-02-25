var http = require('http');
var url = require('url');

var jsonDate = function(date) {
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	}
}

var jsonUnix = function(date) {
	return {
		"unixtime": date.getTime()
	}
}

var server = http.createServer(function(req, res) {

	if(req.method === 'GET'){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		var obj = url.parse(req.url,true);
		var pathname = obj.pathname;
		var query = obj.query;

		if(pathname === '/api/parsetime') {
			var string = query.iso;
			var date = new Date(string);
			var json = jsonDate(date);
			res.end(JSON.stringify(json));
		}

		if(pathname === '/api/unixtime') {
			var string = query.iso;
			var date = new Date(string);
			var json = jsonUnix(date);
			res.end(JSON.stringify(json));
		}
	}
	res.end();
});

server.listen(process.argv[2]);