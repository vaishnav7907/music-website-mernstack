const playlistmodel = require("../model/playlist");

const createplaylist = async (req, res) => {
  try {
    const { songs, playlistname } = req.body;

    const playlistt = new playlistmodel({
      // totalsongs,
      songs,
      playlistname,
    });
    console.log(playlistt);
    await playlistt.save();

    res
      .status(201)
      .json({ message: "playlist created succesfully", data: playlistt });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getplaylists = async (req, res) => {
  try {
    const playlist = await playlistmodel
      .findById(req.params.id)
      .populate("songs"); // 🔥 this gives full song details

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching playlist" });
  }
};

// ADD SONG TO PLAYLIST
const songtoplaylist = async (req, res) => {
  try {
    const { playlistId, songId } = req.body;

    const updatedPlaylist = await playlistmodel.findByIdAndUpdate(
      playlistId,
      {
        $addToSet: { songs: songId } // 🔥 no duplicates
      },
      { new: true }
    );

    if (!updatedPlaylist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.status(200).json({
      message: "Song added successfully",
      data: updatedPlaylist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getallplaylists = async (req, res) => {
  try {
    const allplaylistfn = await playlistmodel.find();
    res.json(allplaylistfn);
  } catch (error) {
    console.log("allplaylisterror", error);
    res
      .status(500)
      .json({ message: "something went wrong in fetch all songs" }, error);
  }
};

const deleteplaylist = async (req, res) => {
  try {
    const playlistid = req.params.id;
    const deleteplaylistfn = await playlistmodel.findByIdAndDelete(playlistid);
    res.json("successfully deleted");
  } catch (error) {
    console.log("deleteplaylistERROR", error);
    res.status(500).json("cant delete this file", error);
  }
};

const updateplaylist = async (req, res) => {
  // const{playlistname}=req.body

  try {
    const playlistid = req.params.id;
    const { playlistname } = req.body;
    const updateplaylistfn = await playlistmodel.findByIdAndUpdate(
      playlistid,
      { playlistname },
      { new: true },
    );

    res.json({ message: "playlistupdated", data: updateplaylistfn });
  } catch (error) {
    console.log("kutta update playlist error", error);

    res.status(500).json("failed to update playlist");
  }
};

module.exports = {
  createplaylist,
  songtoplaylist,
  getplaylists,
  getallplaylists,
  deleteplaylist,
  updateplaylist,
};
