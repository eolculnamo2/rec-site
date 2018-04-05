var express = require('express')
var router = express.Router();
var path = require('path')

var urls = require('../urls')
var mailer = require('./emails')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'/public/core-pages/index.html'))
})

urls.forEach((x,i)=>{
    var splitUrl = x.split(":");
    var location = splitUrl[1];
    var type = splitUrl[0];

    router.get(location,(req,res)=>{
        res.sendFile(path.join(__dirname,"..","/public"+type,location+".html"))
    })
})

module.exports=router;