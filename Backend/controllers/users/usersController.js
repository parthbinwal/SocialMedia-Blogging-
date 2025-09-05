const User=require('../../models/Users/User')
const bcrypt=require('bcryptjs');
const generateToken=require('../../utils/generateToken')
const asyncHandler=require('express-async-handler')
// register the new user it will work on register post route:/api/v1/users/register
//access public  it can be access anywhere
exports.register=asyncHandler(async(req,resp,next)=>{

  const{username,password,email}=req.body;
   const user=await User.findOne({username});
   if(user){
   throw new Error("User already existing")
   }
   const newUser=new User({username,email,password});
  const salt=await bcrypt.genSalt(10);
  newUser.password=await bcrypt.hash(password,salt);
   await newUser.save();
   resp.json({
    status:"success",
    message:"user registered successfully",
    _id:newUser?.username,//optional chaining if property does not exist it return undefined
    email:newUser?.email,
    role:newUser?.role,
   })
});

//  route:/api/v1/users/register/login
//@login user route post global access 
exports.login=asyncHandler(async(req,resp,next)=>{
   const{username,password}=req.body;
   const user=await User.findOne({username});
  if(!user){
  throw new Error("Invalid credential")
  }
  let isMatched=await bcrypt.compare(password,user?.password);
  if(!isMatched){
    throw new Error("Invalid credentials")
  }

user.lastlogin=Date();
await user.save();//update and inert both 
resp.json({
  status:"success",
  email:user?.email,
  _id:user?._id,
  username:user?.username,
  role:user?.role,
  token:generateToken(user),
})
   

});

//@desc Profiel view
//get request api/v1/users/profile/:id
//access private
exports.getProfile=asyncHandler(async (req,resp,next)=>{
 const user=await User.findById(req.userAuth.id) ;
 resp.json({
  status:'success',
  message:'profile fetched',
  user,
 })
  
});
