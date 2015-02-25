var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb)  {
	var extension = '.' + ext;
	var listOf = [];

	fs.readdir(dir, function(err, list) {
		if(err){
			return cb(err);
		}else {
			for(var i = 0; i<list.length; i++){
				var ext = path.extname(list[i]);
				if (ext == extension){
					listOf.push(list[i]);
				}
			}
		}
		cb(null,listOf);
	});
};
