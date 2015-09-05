var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');

var transporter = nodemailer.createTransport(directTransport());

transporter.sendMail({
	from: "",
	to: "",
	subject: "",
	text: ""
})