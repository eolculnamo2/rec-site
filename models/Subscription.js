var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var db = "mongodb://"+process.env.MONGO_ID+":"+process.env.MONGO_PASSS+"@ds145158.mlab.com:45158/rec-page";
mongoose.connect(db);

mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    });

var Subscription = new Schema({
    subscriptions: Array,
    area: String
})

module.exports=mongoose.model("subscriptions", Subscription)
