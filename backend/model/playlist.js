const mongoose = require("mongoose");
const ObjectId =require("mongodb")
const playlistschema = mongoose.Schema(
  {
    songs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "songmodel",
       
    }],
   
    playlistname:{
     type:String,
     default:""
    },
  
    
  },
  {
    timestamps: true,
  },
);

const playlistmodel = mongoose.model("playlistsmodel", playlistschema);

module.exports = playlistmodel;
