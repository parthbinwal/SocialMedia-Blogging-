const jwt=require("jsonwebtoken");
const User = require("../models/Users/User");
const isLoggedIn=(req,resp,next)=>{
  console.log("isLoggedIn executed");
  const token=req?.headers?.authorization?.split(" ")[1]; 
  //verify 
  jwt.verify(token,"secretkey",async(err,decoded)=>{
   if(err){
    return resp.status(401).json({
      status:"failed",
      message:err?.message
    })
   }
   else{
    console.log(decoded)
    const userId=decoded?.user?.id;
    const user =await User.findById(userId).select("username email role _id");
    req.userAuth=user;
    next();
   }
  });
   
}
module.exports=isLoggedIn;