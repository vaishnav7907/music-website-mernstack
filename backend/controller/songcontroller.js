const songmodell = require("../model/songmodel");
const { findOne } = require("../model/userlogin");


const  musicupload = async (req,res)=>{
    // if(!req){
    //     return res.status(400).json("no such req")
    // }
    // res.status(200).json({message:"succes",musicfilesuccess:req.file.path})
    // console.log(req.file.path);    
try {
  const newSong= new songmodell({
    file:req.file.filename,
    songname:req.body.songname,
    artistname:req.body.artistname
  })
  await newSong.save()

  res.json({message:"music uploaded", data:newSong})
} catch (error) {
  

res.status(500).json({error: error.message})

}


}


const songcontroll=async(req,res)=>{


const{file,songname,artistname,duration}=req.body;

const existingsong=await songmodell.findOne({song})
if(existingsong){
    return res.status(409).json({message:"already exist"})
}

else{
  const songdetails=await songmodell.create({
    file,songname,artistname,duration
  })

  console.log(songdetails);
  
  return res.json({message:"song created sucessfuly", data:songdetails})
}


}



const getAllSongs= async (req,res)=>{

  try {
    const fetchAll = await songmodell.find()
    res.json(fetchAll)
  } catch (error) {

    console.log(error);
    
    return res.status(500).json({message:"something went wrong in fetch all songs"} , error)
    
  
    
  }

}


const deleteSongs= async(req,res)=>{
  try {
    const songid=req.params.id
    const deletbysongid=await songmodell.findByIdAndDelete(songid)
    res.json("succcessfully deleted")
  } catch (error) {
    
console.log(error);
return res.status(500).json({message:"something went wrong in delete song "})


  }
}


const getAsong=async (req,res)=>{


try {
  const songid=req.params.id
const getasongbyid= await songmodell.findById(songid)
res.json({message:"successfully found the song",ithu:getasongbyid})




} catch (error) {
  console.log("kutta error ithan:",error);
  return res.status(500).json({messsage:"failed to get song",error})
}


}


const updatesongs=async(req,res)=>{
  try {

   
    const {songname} = req.body
    const  updatesongid= req.params.id
  
    const updatesongbyid= await songmodell.findByIdAndUpdate(updatesongid,{songname:songname},{new:true}) 

    res.json({mesage:"successfully updated song",updatedsong:updatesongbyid})

  } catch (error) {
    console.log("kutta error veendum:",error);
    return res.status(500).json("failed to update song")
    
  }
}

module.exports={musicupload,songcontroll,getAllSongs,deleteSongs,getAsong,updatesongs}