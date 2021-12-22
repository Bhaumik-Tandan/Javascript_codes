const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'no.reply.betra@gmail.com',
		pass: 'abcd@123A'
	}
});

let mailDetails = {
	from: 'no.reply.betra@gmail.com',
	to: 'bhaumik@appleute.de',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log('Email sent successfully');
	}
});
