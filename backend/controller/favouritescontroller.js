const favouritemodel = require("../model/favourites");

const createfavourites = async (req, res) => {
  try {
    const { songs } = req.body;
    const favourites = new favouritemodel({ songs });
    console.log(favourites);

    await favourites.save();

    res.json({message:"favourites created successfully", data:favourites})
  } catch (error) {
    console.log("favourites error",error);
    res.status(500).json(error)
    
  }
};

const addtoFavourites=async()=>{




}


module.exports=createfavourites
