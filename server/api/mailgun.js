//use .env file
require('dotenv').config();

const from = process.env.MAILGUN_FROM
const api_Key = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN

const mailgun = require('mailgun-js')({apiKey: api_Key, domain : domain, host: 'api.eu.mailgun.net'})

sendMessage = (to, subject, text) => {
    const data = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };

    mailgun.messages().send(data,function(error,body){
        console.log(body)
    });
}

exports.sendWelcomeMessage = (to) => {
    var subject = `Welcome to POG Cars`
    var text = 'We appriciate you joining our community. We hope you enjoy your stay.\n\nRegards,\nPOG Cars';

    sendMessage(to, subject, text)
}

exports.sendNotification = (to) =>{ //sample code
    // ^ 
}