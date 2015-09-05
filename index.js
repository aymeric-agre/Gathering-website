var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
});

server.listen(80);
