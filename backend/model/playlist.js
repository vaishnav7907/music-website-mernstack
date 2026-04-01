const mongoose = require("mongoose");

const playlistschema = mongoose.Schema(
  {
    songs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "songmodel",
      required: true,
    }],
    // songname: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "songmodel",
    //   required: true,
    // },
    // artist: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "songmodel",
    //   default: "",
    // },
    playlistname:{
     type:String,
     default:""
    },
    totalsongs:{
     type:String,
     default:""
    },

    // duration: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "songmodel",
    //   default: "",
    // },
    // //     songUrl: { type: String, required: true },
    // songimage: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "songmodel",
    //   default: "",
    // },
    
  },
  {
    timestamps: true,
  },
);

const playlistmodel = mongoose.model("playlistsmodel", playlistschema);

module.exports = playlistmodel;
