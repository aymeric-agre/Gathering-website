var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

/**
 * Rendering engine
 */
// app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname + '/Public/Views');

/**
 * Definition of middlewares
 */
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/Public'));

app.get('*', function(req, res){
    res.sendFile('/Public/index.html'); // load our public/index.html file
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server app at http://%s:%s', host, port);
})

// expose app           
exports = module.exports = app;  