const jwt= require("jsonwebtoken")


const verifytoken=(req,res,next)=>{

    const getauthorization=req.headers.authorization;

    if(!getauthorization){

        return res.status(403).json({message:"token required"})

    }

    const gettoken=getauthorization.split(" ")[1]
    console.log("gettoken:",gettoken);
    
try {
    const decoded=jwt.verify(gettoken,process.env.jwt_token)
    req.user =decoded
    console.log("decoded :",decoded);
    next()
    
} catch (error) {
    console.log("error anu mone",error);
    res.status(401).json({message:"token error"})
    
}
}


module.exports=verifytoken