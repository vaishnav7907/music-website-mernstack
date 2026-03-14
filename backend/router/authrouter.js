const express = require("express")
const { userauthcreate, userlogin } = require("../controller/authcontroller")
const verifytoken = require("../middleware/middleware")
const upload = require("../utility/multer")
const { songcontroll,musicupload, getAllSongs, deleteSongs, getAsong, updatesongs}  = require("../controller/songcontroller")
// const musicupload = require("../controller/songcontroller")

const router= express.Router()



router.route("/signup").post(userauthcreate)
router.route("/login").post(userlogin)
router.post("/musicfiles",verifytoken,upload.single("uploadmusic"),musicupload)
router.post("/songinfo",songcontroll)

//get all songs
router.get("/getallsongs",getAllSongs)

//delete songs 
router.delete("/deletesongs/:id",deleteSongs)

//get a song
router.get("/getasong/:id",getAsong)


//update a song
router.patch("/updatesongs/:id",updatesongs)

module.exports=router