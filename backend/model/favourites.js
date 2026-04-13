const mongoose=require("mongoose")

const favouriteschema= mongoose.Schema({

userId:{type:mongoose.Schema.Types.ObjectId,ref:"userauthmodel"},
songsId:[{type:mongoose.Schema.Types.ObjectId,ref:"songmodel",required:true}],


},
{
    timestamps:true
}

)

const favsongsmodel= mongoose.model("favsongs",favouriteschema)

module.exports=favsongsmodel