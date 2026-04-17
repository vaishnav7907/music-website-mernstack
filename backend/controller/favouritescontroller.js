const favouritemodel = require("../model/favourites");
const { create } = require("../model/userlogin");


const addtoFavourites = async (req, res) => {
  try {
    const { songId } = req.body;
    const userId = req.user.id;

    const existing = await favouritemodel.findOne({ songId, userId });

    if (existing) {
      return res.status(400).json({
        message: "Song already in favourites",
      });
    }

    const addsongtofav = await favouritemodel.create({
      songId,
      userId,
    });

    return res.status(201).json({
      message: "Added to favourites",
      data: addsongtofav,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};



const getallfav=async(req,res)=>{
try {
  const userId=req.user.user_id
 const getfav= await favouritemodel.find({userId}).populate("songId")
   res.json(getfav);
} catch (error) {
  res.status(500).json({ error: err.message });
}
}

const favouritesremove = async (req, res) => {
  try {
    const songId = req.params.id;
    const favremovefn = await favouritemodel.findByIdAndDelete(songId);
    res.json("fav song removed")
  } catch (error) {
     console.log("deletefavourites ERROR", error);
    res.status(500).json("cant delete this file", error);
  }
};

module.exports = {  addtoFavourites,favouritesremove,getallfav };
