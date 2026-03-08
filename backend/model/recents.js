const mongoose= require("mongoose")

const recentschema= mongoose.Schema({


songname:{type:String,required:true},
artist:{type:String, required:true},
duration:{type:String, required:true},
songUrl:{type:String, required:true},
songimg:{type:String,required:true},


},
{
     timestamps:true
}


)


const recentsmodel = mongoose.model("recentsmodel",recentschema)

module.exports=recentsmodel