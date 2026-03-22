const mongoose=require("mongoose")

const favouriteschema= mongoose.Schema({


songname:{type:mongoose.Schema.Types.ObjectId,ref:"songmodel",required:true},
 artistname:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
duration:{type:String, required:true},
songUrl:{type:String, required:true},
songimage:{type:mongoose.Schema.Types.ObjectId,ref:"artistimg",default:""},
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