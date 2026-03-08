const express = require("express")
const { userauthcreate, userlogin } = require("../controller/authcontroller")
const verifytoken = require("../middleware/middleware")
const upload = require("../utility/multer")
const { songcontroll,musicupload}  = require("../controller/songcontroller")
// const musicupload = require("../controller/songcontroller")

const router= express.Router()



router.route("/signup").post(userauthcreate)
router.route("/login").post(userlogin)
router.post("/musicfiles",verifytoken,upload.single("uploadmusic"),musicupload)
router.post("/songinfo",songcontroll)

module.exports=router