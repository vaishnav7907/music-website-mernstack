const modelll = require("../model/userlogin");
const bcryptt = require("bcrypt");

const jwtoken = require("jsonwebtoken");
const { model } = require("mongoose");

// const userauthcreate = async (req, res) => {

//     const {Fullname, Email, Password } = req.body

//     const existingemail = await modelll.findOne({ Email })
//     if (existingemail) {
//         return res.status(409).json({ message: "already exist" })
//     }

//     else {
//         const bcrypt = await bcryptt.hash(Password, 10)

//         const userdetails = await modelll.create({
//           Fullname,  Email, Password: bcrypt
//         })

//         console.log(userdetails);

//         return res.json({ message: "success", data: userdetails })

//     }

// }

// login

// const userlogin = async (req, res) => {

//     const { Email, Password } = req.body

//     const isemailexist = await modelll.findOne({ Email })

//     if (!isemailexist) {
//           return res.status(400).json({ message: "invalid email" });
//     }

//     const ispassexist = await bcryptt.compare(Password, isemailexist.Password)
//     if (!ispassexist) {
//         return res.status(400).json({ message: "invalid password" });
//     }

//     else {

//         const token = jwtoken.sign(

//             { user_id: isemailexist._id },
//             process.env.jwt_token,
//             { expiresIn: "1h" }

//         )

//         res.json({token})

//     }
// }
const userauthcreate = async (req, res) => {
  try {
    const { Fullname, Email, Password } = req.body;

    const existingemail = await modelll.findOne({ Email });

    if (existingemail) {
      return res.status(409).json({ message: "already exist" });
    }

    const hashedPassword = await bcryptt.hash(Password, 10);

    const userdetails = await modelll.create({
      Fullname,
      Email,
      Password: hashedPassword,
    });

    return res.json({
      message: "success",
      user: {
        id: userdetails._id,
        Fullname: userdetails.Fullname,
        Email: userdetails.Email,
      },
    });
  } catch (error) {
    console.log("SIGNUP ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const userlogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const isemailexist = await modelll.findOne({ Email });

    if (!isemailexist) {
      return res.status(400).json({ message: "invalid email" });
    }

    const ispassexist = await bcryptt.compare(Password, isemailexist.Password);

    if (!ispassexist) {
      return res.status(400).json({ message: "invalid password" });
    }

    const token = jwtoken.sign(
      { id: isemailexist._id },    //userid
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({ token });
  } catch (error) {
    console.log("LOGIN ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { userauthcreate, userlogin };
