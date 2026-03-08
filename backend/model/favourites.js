const mongoose=require("mongoose")

const favouriteschema= mongoose.Schema({


songname:{type:String,required:true},
artist:{type:String, required:true},
duration:{type:String, required:true},
songUrl:{type:String, required:true},
songimg:{type:String,required:true},
totalsongs:{type:String,required:true},
topgenre:{type:String,required:true},
totalduration:{type:String,required:true}

},
{
    timestamps:true
}

)

const favsongsmodel= mongoose.model("favsongs",favouriteschema)

module.exports=favsongsmodel