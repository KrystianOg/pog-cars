//use .env file 
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSID = process.env.TWILIO_SERVICE_SID

const client = require('twilio')(accountSid, authToken); 

function sendMessage(to, body){

    client.messages.create
        ({
            body: body,
            to: to,
            messagingServiceSid : serviceSID
        })
        .then(message => console.log(message.sid)) 
        .done();
}

function sendToMe(body){
    client.messages.create
        ({ 
            body: body,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.TWILIO_MY_NUMBER,
            messagingServiceSid : serviceSID
        })
        .then(message => console.log(message.sid))
        .done();
}

module.exports ={
    sendMessage,
    sendToMe
}