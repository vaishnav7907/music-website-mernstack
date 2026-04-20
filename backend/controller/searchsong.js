const songmodell= require("../model/songmodel")


const  searchsong= async (req,res)=>{


try {
    const query= req.query.query?.trim();
    if(!query){
         return res.status(400).json({ message: "Search query required" });
    }

    const songs= await songmodell.find({
        songname:{$regex:query,$options:"i"}
    })
    res.json(songs)
} catch (error) {
   console.log("ERROR:", error); // 👈 VERY IMPORTANT
  res.status(500).json({ message: "Server error" });
}

}

module.exports=searchsong
