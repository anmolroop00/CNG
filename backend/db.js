const mongoose = require('mongoose');

const MongoUri = "mongodb://127.0.0.1:27017/foo?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect(MongoUri, ()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports= connectToMongo