var express = require('express'),
	app = express();

app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html');
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server app at http://%s:%s', host, port);
})