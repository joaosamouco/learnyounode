var fs = require('fs');
var path = require('path');


var extension = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	if(err){
		console.log(err);
	} else {
		for(var i = 0; i<list.length; i++){
			var ext = path.extname(list[i]);
			if (ext == extension){
				console.log(list[i]);
			}
		}
	}

});

