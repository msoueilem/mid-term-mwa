const mongoose = require("mongoose")
require("./grade.model")

mongoose.connect(process.env.DB_URL)

mongoose.connection.on("connection",function(){
    console.log("Mongoose connected on",process.env.DB_NAME);
})