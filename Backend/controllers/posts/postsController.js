const asyncHandler=require('express-async-handler');
const Post=require('../../models/Posts/Post');
const User=require('../../models/Users/User');
const Category=require('../../models/Categories/Category')
//@desc Create a new Post
//@route POST/api/v1/posts
//private
exports.createPost=asyncHandler(async(req,resp,next)=>{
  const {title,content,categoryId}=req.body;
  const postFound=await Post.findOne({title});
  if(postFound){
    let error=new Error("post already exist");
    next(error);
    return;
  }

  const post=await Post.create({title,content,category:categoryId,author:req?.userAuth?._id})
  const user=await User.findByIdAndUpdate(req?.userAuth?._id,{$push:{posts:post._id}},{new:true})
  const catg=await Category.findByIdAndUpdate(categoryId,{$push:{posts:post._id}},{new:true})
  res.json({
    status:"success",
    message:"post successfully created",
    post,
    user,
    catg
  })
}
)