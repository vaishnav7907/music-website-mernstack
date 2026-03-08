const mongoose= require("mongoose")

const playlistschema= mongoose.Schema({


songname:{type:String,required:true},
artist:{type:String, required:true},
duration:{type:String, required:true},
songUrl:{type:String, required:true},
songimg:{type:String,required:true},
playlistname:{type:String},
totalsongs:{type:String}

},
{
     timestamps:true
}

)


const playlistmodel = mongoose.model("playlistsmodel",playlistschema)

module.exports=playlistmodel