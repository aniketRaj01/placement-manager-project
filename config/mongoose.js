//import all required packages 
const mongoose = require('mongoose');

//sets up the mongodb cloud url
MongoURL = "mongodb+srv://freeuse:freeuse@cluster0.jkjla.mongodb.net/?retryWrites=true&w=majority";

//connect to app to mongodb
mongoose.connect(MongoURL)
.then(()=>console.log('DB Connected Sucessfully'))
.catch((err)=>console.log(`Connetion Error in Mongodb ${err}`));
