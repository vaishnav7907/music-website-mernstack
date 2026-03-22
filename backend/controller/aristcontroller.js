// const artistmodel = require("../model/artistsimg");
const modelartist= require("../model/artistsimg")



const artistupload = async (req, res) => {
  try {


 if (!req.files || !req.files.artists) {
      return res.status(400).json({ message: "No artist image uploaded" });
    }

    // const imagePath = req.files.artists[0].path;
    const newartist = new modelartist({
      artistname: req.body.artistname,
      artistimge: req.files.artists[0].path,
      // artistimge:imagePath,
    });

    await newartist.save();

    res.json({ message: "artists uploaded", data: newartist });


  } catch (error) {
    res.status(500).json({ error: error.message, thisis: "didnt upload artists" });
  }
};

const artistcreate = async (req, res) => {
  const { artistname, artistimge } = req.body;

  const existingartist = await modelartist.findOne({ artistname });

  if (existingartist) {
    return res.status(409).json({ message: "artist is already exist " });
  } else {
    const artistdetails = await modelartist.create({

        artistname, 
        artistimge
    }
    );

    console.log(artistdetails);
    return res.json({ message: "song created sucessfuly", data: artistdetails })
  }
};

const getallartists = async (req,res) => {
 try {
    const fetchAllartists = await modelartist.find();
    res.json(fetchAllartists);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "something went wrong in fetch all artists" }, error);
  }
}

module.exports = {artistupload,artistcreate,getallartists}
