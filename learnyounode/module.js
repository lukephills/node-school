var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, filenameExt, callback) {


	fs.readdir(directoryName, function(err, list){

		if (err) 
			return callback(err)

		var data = [];

		list.forEach(function(f){
			if ( path.extname(f) === '.'+filenameExt ){
				data.push(f)
			}
		})


		callback (null, data)

	})

}