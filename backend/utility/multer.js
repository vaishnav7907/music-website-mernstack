const { error } = require("console");
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
    
    
  },

  filename: function (req, file, cb) {
    const uniquefile = `${req.user.userId}-${Date.now()}-${path.extname(file.originalname)}`;
    cb(null, uniquefile);
  },
});



const filefilt=(req,file,cb)=>{

    const mediatypes=/mp3|wav|flac|jpg/;

    const extenstionnametolower= mediatypes.test(
        path.extname(file.originalname).toLowerCase()
    )

    const mymetype =mediatypes.test(file.mymetype)

    if(extenstionnametolower&&mymetype){
      cb(null,true)
    } else{
      cb(error("this file is not alowed" , false))
    }


}



const upload=multer({
    storage:storage,
    filefilt:filefilt
})

module.exports=upload
