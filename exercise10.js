var net = require('net');

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

var server = net.createServer(function(socket){
	var date = new Date();

	var string = date.getFullYear().toString() + '-' +
					 		formatNumber(date.getMonth() + 1) + '-' +
					 		formatNumber(date.getDate()) + ' ' +
					 		formatNumber(date.getHours()) + ':' +
					 		formatNumber(date.getMinutes()) + '\n';
	socket.end(string);
});

server.listen(process.argv[2]);

/*
"YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

"2013-07-06 17:42"
*/