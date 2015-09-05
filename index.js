var express = require('express'),
	app = express();

app.use(express.static('public'));

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server app at http://%s:%s', host, port);
})