const express = require("express")
const { userauthcreate, userlogin } = require("../controller/authcontroller")
const verifytoken = require("../middleware/middleware")
const upload = require("../utility/multer")
const { songcontroll,musicupload, getAllSongs, deleteSongs, getAsong, updatesongs, updateimage}  = require("../controller/songcontroller")
const { artistcreate, getallartists, artistupload, updateartist, deleteartist } = require("../controller/aristcontroller")
const getplaylist = require("../controller/playlistcontroller")
// const musicupload = require("../controller/songcontroller")

const router= express.Router()



router.route("/signup").post(userauthcreate)
router.route("/login").post(userlogin)
// router.post("/musicfiles",verifytoken,upload.single("uploadmusic"),musicupload)
// router.post("/musicfiles",verifytoken,upload.array("uploadmusic",10),musicupload)
router.post("/musicfiles",verifytoken,upload.fields([{name:"photos",maxCount:5},{name:"songs",maxCount:3}]),musicupload)
router.post("/songinfo",songcontroll)

//get all songs
router.get("/getallsongs",getAllSongs)

//delete songs 
router.delete("/deletesongs/:id",deleteSongs)

//get a song
router.get("/getasong/:id",getAsong)


//update a song
router.patch("/updatesongs/:id",updatesongs)


//update img 
router.patch("/updtimg/:id",updateimage)


// create artists
 //router.post("/createartist",artistcreate)

 router.post(
  "/createartist",  verifytoken,upload.fields([{ name: "artists", maxCount: 1 }]),artistupload);

//  getall artists

router.get("/getallartists",getallartists)

//update artist

router.patch("/updtartist/:id",updateartist)


//deelete artist

router.delete("/dltartist/:id",deleteartist)


//playlist


//createplaylist
router.post("/createplaylist",getplaylist.createplaylist)

router.post("/:id/addsongplaylist",getplaylist.songtoplaylist)

module.exports=router