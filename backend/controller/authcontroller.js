const modelll = require("../model/userlogin")
const bcryptt = require("bcrypt")

const jwtoken = require("jsonwebtoken")
const { model } = require("mongoose")



const userauthcreate = async (req, res) => {

    const { Email, Password } = req.body

    const existingemail = await modelll.findOne({ Email })
    if (existingemail) {
        return res.status(409).json({ message: "already exist" })
    }

    else {
        const bcrypt = await bcryptt.hash(Password, 10)

        const userdetails = await modelll.create({
            Email, Password: bcrypt
        })

        console.log(userdetails);

        return res.json({ message: "success", data: userdetails })

    }


}



// login


const userlogin = async (req, res) => {


    const { Email, Password } = req.body

    const isemailexist = await modelll.findOne({ Email })

    if (!isemailexist) {
        res.json("invalid email")
    }


    const ispassexist = await bcryptt.compare(Password, isemailexist.Password)
    if (!ispassexist) {
        res.json("invalid password")
    }

    else {

        const token = jwtoken.sign(

            { user_id: isemailexist._id },
            process.env.jwt_token,
            { expiresIn: "1hr" }

        )

        res.json({token})

        
    }
}






module.exports={userauthcreate,userlogin}