var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var path = require('path')
var mailer = require('./emails')
var Subscription = require('../models/Subscription')


router.post("/submit-contact-us",(req,res)=>{
    var messageDetails = "NAME: "+req.body.name+" EMAIL: "+req.body.email+" SUBJECT: "+req.body.subject+" MESSAGE: "+req.body.message;
    mailer.sendEmail(req.body.email, messageDetails)
    res.redirect("/")
})

router.post("/add-subscription",(req,res)=>{
    console.log("called.")
    var email = req.body.email;
    console.log(email)
    Subscription.findOneAndUpdate({area: "subscribers"},{$push: {"subscriptions": email}},{new: true},(err,info)=>{
        if(err){
            throw err;
        }
        res.redirect("/")
    })
})

module.exports=router;