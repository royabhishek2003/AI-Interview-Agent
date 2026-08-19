import User from "../models/user.model.js";
import genToken from "../config/token.js"

export  const googleAuth= async(req,res) =>{
    try{
        const {name,email}= req.body;

        let user= await User.findOne({email})
        if(!user){
            user= await User.create({
                name,
                email
            })
        }

        let token= await genToken(user._id);
        return res.cookie("token",token,{
            http:true,
            secure:false,  // secure true means  server Only send this cookie over an HTTPS connection but we want over http here in developemnt 
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

        return res.status(200).json(user)
    }
    catch(error){
        return res.status(500).json({
            message:`Google Auth Error ${error}`
        })
    }
}

// for logout 
export  const logout= async(req, res)=>{
    try{
        await res.clearCookie("token")
        return res.status(200).json({
            message:"Logut Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            message:`Error while logging out the user ${error}`
        })
    }
}