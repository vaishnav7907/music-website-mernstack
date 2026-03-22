const mongoose= require("mongoose")

const playlistschema= mongoose.Schema({


songname:{type:mongoose.Schema.Types.ObjectId,ref:"songmodel",required:true},
 artistname:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
duration:{type:String, required:true},
songUrl:{type:String, required:true},
songimage:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
playlistname:{type:String},
totalsongs:{type:String}

},
{
     timestamps:true
}

)


const playlistmodel = mongoose.model("playlistsmodel",playlistschema)

module.exports=playlistmodel