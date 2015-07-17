http = require('http');
bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var allData = [];
var count = 0

urls.forEach(function(url, i){

	http.get(url, function(response){

		response.on("error", console.error);

		response.pipe(bl(function (err, data) {

			if (err) return console.log(err);

			allData[i] = data.toString();


			if (count++ === urls.length-1){
			
				output(allData);
			}


		}))

	})

})

function output(output) {
	for (var j=0; j<output.length; j++){
		console.log(output[j]);
	}
}



