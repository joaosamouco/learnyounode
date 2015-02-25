var module = require('./exercise6-module');

var dir = process.argv[2],
		extension = process.argv[3];

module(dir, extension, function(err, data){
	if(err){
		console.log('Error');
		return err;
	}
	data.forEach(function(elem) {
		console.log(elem);
	});
});