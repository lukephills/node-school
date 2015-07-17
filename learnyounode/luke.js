

// Arguments
var version = '0.0.1';

for (var i = 2; i < process.argv.length; i++){

	switch (process.argv[i]) {
		case '-v':
			console.log('v'+ version)
			break

		case 'hello':
			console.log(' HELLO!!! ');
			break

		default:	
			console.log('Luke\'s node plugin is so cool');
	}
	
}