
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "photos") {
      cb(null, "./uploads/images");
    } else if (file.fieldname === "songs") {
      cb(null, "./uploads/songs");
    } else if (file.fieldname == "artists") {
      cb(null, "./uploads/artists");
    } else {
      
      
      cb( new Error("invalid fieldname"), false);
    }
  },

  filename: function (req, file, cb) {
    const uniquefile = `${req.user.user_id}-${Date.now()}${path.extname(file.originalname)}`;
    //  const uniquefile = `{Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniquefile);
  },
});

const filefilt = (req, file, cb) => {
  // const mediatypes=/mp3|wav|flac|jpg|png|jpeg/;

  // const extenstionnametolower= mediatypes.test(
  //     path.extname(file.originalname).toLowerCase()
  // )

  // const mymetype =mediatypes.test(file.mimetype)

  // if(extenstionnametolower&&mymetype){
  //   cb(null,true)
  // } else{
  //   cb(new error("this file is not alowed") , false)
  // }

  if (file && file.fieldname === "photos") {
    const mediatypee = /jpg|png|jpeg/;

    const extenstionnametolow = mediatypee.test(
      path.extname(file.originalname).toLowerCase(),
    );

    const mymetyp = mediatypee.test(file.mimetype);

    if (extenstionnametolow && mymetyp) {
      cb(null, true);
    } else {
      cb(new Error("this file is not alowed"), false);
    }


  } else if (file && file.fieldname == "artists") {
    const mediatypeeee = /jpg|png|jpeg/;

    const extenstionnametolowwer = mediatypeeee.test(
      path.extname(file.originalname).toLowerCase(),
    );

    const mymetypee = mediatypeeee.test(file.mimetype);

    if (extenstionnametolowwer && mymetypee) {
      cb(null, true);
    } else {
      cb(new Error("this file is not alowed"), false);
    }



  } else if (file && file.fieldname === "songs") {
    const mediatypes = /mp3|wav|flac/;

    const extenstionnametolower = mediatypes.test(
      path.extname(file.originalname).toLowerCase(),
    );

    const mymetype = mediatypes.test(file.mimetype);

    if (extenstionnametolower && mymetype) {
      cb(null, true);
    } else {
      cb(new Error("this file is not alowed"), false);
    }
  } else {
    cb(new error("invalid frild name"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filefilt,
});

module.exports = upload;
