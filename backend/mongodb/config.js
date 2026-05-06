const mongoose = require("mongoose")




const connection=async()=>{

    try {
        const connect=await mongoose.connect(process.env.MONGODB_URI)

        console.log("successfully connected to mongoDB");
        
    } catch (error) {
        console.log("couldn't connect to mongoDB", error);
        process.exit()
        
    }

}

module.exports=connection