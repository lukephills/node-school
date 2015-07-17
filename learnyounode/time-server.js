net = require('net');


var port = Number(process.argv[2]);

var server = net.createServer(function(socket) {

	var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth()+1,
		day = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),

		dateString = year + '-' + add0(month) +'-'+ add0(day) +' '+add0(hours)+':'+add0(minutes)+'\n';

	// socket.write();
	socket.end(dateString);

});

server.listen(port);

function add0(number) {

	return number < 10 ? '0'+number : number;

}