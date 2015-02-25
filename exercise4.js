var fs = require('fs');
var count;
fs.readFile(process.argv[2],'utf-8', function(err, data) {
	count = data.split('\n').length - 1;
	console.log(count);
});
