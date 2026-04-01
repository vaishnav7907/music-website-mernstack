const playlistmodel = require("../model/playlist");

const createplaylist = async (req, res) => {
  try {
    const { totalsongs,songs, playlistname } = req.body;

    const playlist = new playlistt({
      totalsongs,
      songs,
      playlistname,
    });

    await playlist.save();

    res
      .status(200)
      .json({ message: "playlist created succesfully", data: playlist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const songtoplaylist = async (req, res) => {
  

  // try {
  //   const {songId}=req.body
  //   if (!songId) {
  //     return res.status(400).json({ message: "songId is required" });
  //   }

  //   const playlist = await playlistmodel.findById(req.params.id);

  //   if (!playlist) {
  //     return res.status(404).json({ message: "Playlist not found" });
  //   }

  //   playlist.songs.push(songId)
  //   await playlist.save()
  //   res.json(playlist)
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }


  try {
    
  } catch (error) {
    
  }
};

module.exports = {createplaylist,songtoplaylist};
