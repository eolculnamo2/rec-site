var nodemailer = require('nodemailer');
var express = require('express')
var path = require('path')
var fs = require('fs')

module.exports = {
    sendEmail: function(userEmail, messageForUs){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rbertramCode@gmail.com',
                pass: 'coderRob12'
            }
        });

    fs.readFile(path.join(__dirname,"..","/public/emails/thank-you.html"),"utf8",(err,info)=>{
        let mailOptions = {
            from: 'rbertramCode@gmail.com',
            to: userEmail,
            subject: "World of Rec",
            text: "Thank you for contacting us. Replies can take between 3-5 days.",
            html: info
        }

        let toUsMail = {
            from: 'rbertramCode@gmail.com',
            to: "rbertram8@gmail.com",
            subject: "ADMIN: World of Rec",
            text: messageForUs
        }
        var loop = [mailOptions, toUsMail];
        for(var i = 0; i <2; i++){
        transporter.sendMail(loop[i], function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
            });
        }
    });

    }

} //Ends Exports