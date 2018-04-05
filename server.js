var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var mailer = require('./routes/emails')
var routes = require('./routes/routes')
var postRequests = require('./routes/post-requests')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", routes);
app.use("/requests", postRequests)

app.listen(3000,()=>{
    console.log("ON")
})