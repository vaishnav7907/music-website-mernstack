const mongoose= require("mongoose")

const userschema= new mongoose.Schema({

Fullname:{type:String,required:true,},
Email:{type:String, required:true,unique:true},
Password:{type:String,required:true,},



}

)

const modell= mongoose.model("userauthmodel",userschema)

module.exports=modell


