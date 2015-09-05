var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');

exports.contactMail = function(req, res){
	var transporter = nodemailer.createTransport(directTransport());
	
	transporter.sendMail({
		from: req.body.firstName + ' ' + req.body.lastName + '&lt;' + req.body.email + '&gt;',
		to: 'gathering.edu@gmail.com',
		subject: req.body.subject,
		text: req.body.text
	}, function (err, response){
		if(err){
			console.log('mail not sent');
		}else{
			console.log('mail sent');
		}
	})
};