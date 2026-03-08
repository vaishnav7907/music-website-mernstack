const songmodell = require("../model/songmodel");
const { findOne } = require("../model/userlogin");


const  musicupload=(req,res)=>{
    if(!req){
        return res.status(400).json("no such req")
    }
    res.status(200).json({message:"succes",musicfilesuccess:req.file.path})
    console.log(req.file.path);    



}


const songcontroll=async(req,res)=>{


const{song,songname,artistname,duration}=req.body;

const existingsong=await songmodell.findOne({song})
if(existingsong){
    return res.status(409).json({message:"already exist"})
}

else{
  const songdetails=await songmodell.create({
    song,songname,artistname,duration
  })

  console.log(songdetails);
  
  return res.json({message:"song created sucessfuly", data:songdetails})
}


}

module.exports={musicupload,songcontroll}