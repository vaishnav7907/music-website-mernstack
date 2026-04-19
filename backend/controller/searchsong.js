const songmodell= require("../model/songmodel")


const  searchsong= async (req,res)=>{


try {
    const query= req.query?.trim();
    if(!query){
        res.json("Search query required")
    }

    const songs= await songmodell.find({
        title:{$regex:query,$options:"1"}
    })
    res.json(songs)
} catch (error) {
    res.status(500).json( "Server error" ,error);
}

}

module.exports=searchsong
