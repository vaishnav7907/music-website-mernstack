const mongoose = require("mongoose");

const artistschema = mongoose.Schema({
  artistname: { type: String, default: "" },
  artistimge: { type: String, default: "" },  
});

// const artistmodel=mongoose.model("artistandimg", aristschema);

// module.exports =artistmodelmodel;


const modelartist=mongoose.model("artistimg",artistschema);


module.exports=modelartist