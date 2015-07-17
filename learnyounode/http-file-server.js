http = require('http');
fs = require('fs');

var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(req, res){

	var readStream = fs.createReadStream(file).pipe(res);

}).listen(port);
