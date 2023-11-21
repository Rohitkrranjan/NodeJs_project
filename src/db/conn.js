const mongoose = require("mongoose");


// creating database

mongoose.connect("mongodb://localhost:27017/rohitdynamic",{
    // useCreateIndex:true,
    // useNewUlrParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((error)=>{
    console.log(error);
})
