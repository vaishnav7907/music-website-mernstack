const mongoose= require("mongoose")

const songschema= new mongoose.Schema({
    file:{type:String,default:""},
    songname:{type:String,default:""},
    // artist:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
    artist:{type:String,default:""},
    duration:{type:Number,default:0},
    songimage:{type:String,default:"" }

},


{
    
    timestamps:true
     
}
)

const songmodell=mongoose.model("songmodel",songschema)


module.exports=songmodell