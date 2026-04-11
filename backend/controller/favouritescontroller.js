const favouritemodel = require("../model/favourites");

const createfavourites = async (req, res) => {
  try {
    const { songs } = req.body;
    const favourites = new favouritemodel({ songs });
    console.log(favourites);

    await favourites.save();

    res.json({ message: "favourites created successfully", data: favourites });
  } catch (error) {
    console.log("favourites error", error);
    res.status(500).json(error);
  }
};

const addtoFavourites = async (req, res) => {
  try {
    const { favouritesId, songId } = req.body;
    const addfavfn = await favouritemodel.findByIdAndDelete(
      favouritesId,
      { $addToSet: { songs: songId } },
      { new: true },
    );
    if (!addfavfn) {
      res.json({ message: "favourites not found", data: addfavfn });
    }
    res.json({ message: " song  added to favourites", data: addfavfn });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const favouritesremove = async (req, res) => {
  try {
    const songid = req.params.id;
    const favremovefn = await favouritemodel.findByIdAndDelete(songid);
    res.json("fav song removed")
  } catch (error) {
     console.log("deletefavourites ERROR", error);
    res.status(500).json("cant delete this file", error);
  }
};

module.exports = { createfavourites, addtoFavourites,favouritesremove };
