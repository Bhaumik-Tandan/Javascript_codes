const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({    
    host: "smtpout.secureserver.net",  
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        user: "info@bbetra.com",
        pass: "Betra1234!" 
    }
});

const mailOptions = {
    from: `info@bbetra.com`,
    to: `bhaumik@appleute.de`,
    subject: `Test mail`,
    text: `Hi this is bhaumik
    `,

};

mailTransport.sendMail(mailOptions).then(() => {
    console.log('Email sent successfully');
}).catch((err) => {
    console.log('Failed to send email');
    console.error(err);
});