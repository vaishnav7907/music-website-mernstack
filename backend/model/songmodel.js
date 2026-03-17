const mongoose= require("mongoose")

const songschema= new mongoose.Schema({
    file:{type:String,default:""},
    songname:{type:String,default:""},
    artistname:{type:String,default:""},
    duration:{type:String,default:""},
    image:{type:String,default:"" }

},


{
    
    timestamps:true
     
}
)

const songmodell=mongoose.model("songmodel",songschema)


module.exports=songmodell