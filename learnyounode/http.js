http = require('http');
bl = require('bl');

const goog = 'http://femurdesign.com'
var url = process.argv[2]


http.get(url, function(response){

	response.setEncoding('utf8')

	response.on("error", console.error);

	response.pipe(bl(function (err, data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})
