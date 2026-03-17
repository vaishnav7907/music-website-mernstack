const express = require("express")
const { userauthcreate, userlogin } = require("../controller/authcontroller")
const verifytoken = require("../middleware/middleware")
const upload = require("../utility/multer")
const { songcontroll,musicupload, getAllSongs, deleteSongs, getAsong, updatesongs, updateimage}  = require("../controller/songcontroller")
// const musicupload = require("../controller/songcontroller")

const router= express.Router()



router.route("/signup").post(userauthcreate)
router.route("/login").post(userlogin)
// router.post("/musicfiles",verifytoken,upload.single("uploadmusic"),musicupload)
// router.post("/musicfiles",verifytoken,upload.array("uploadmusic",10),musicupload)
router.post("/musicfiles",verifytoken,upload.fields([{name:"photos",maxcount:5},{name:"songs",maxcount:3}]),musicupload)
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


module.exports=router