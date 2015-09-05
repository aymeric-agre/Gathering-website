var express = require('express'),
	
	app = express();

/**
 * Rendering engine
 */
// app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname + '/Public/Views');

/**
 * Definition of middlewares
 */
// app.use(bodyParser());
app.use(express.static(__dirname + '/Public'));

app.get('/', function(req, res){
	res.end()
})

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server app at http://%s:%s', host, port);
})