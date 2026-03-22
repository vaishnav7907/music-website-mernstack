const mongoose= require("mongoose")

const recentschema= mongoose.Schema({


 songname:{type:mongoose.Schema.Types.ObjectId,ref:"songmodel",required:true},
 artistname:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
duration:{type:String, required:true},
 file:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
songimage:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},


},
{
     timestamps:true
}


)


const recentsmodel = mongoose.model("recentsmodel",recentschema)

module.exports=recentsmodel