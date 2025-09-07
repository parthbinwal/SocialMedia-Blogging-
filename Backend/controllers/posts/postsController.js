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
  resp.json({
    status:"success",
    message:"post successfully created",
    post,
    user,
    catg
  })
}
)
//get all post private
//get api/v1/posts
exports.getAllPosts=asyncHandler(async(req,resp)=>{
  //fetch all the post
  const allPost=await Posts.find({})
  //
   resp.json({
    status:"success",
    message:"all post successfully fetched",
    allPost
  })
})
//single post get 
//get /api/v1/posts/:id
exports.getPost=asyncHandler(async(req,resp,next)=>{
  const postId=req.params.id;
  const post=await Post.findById(postId);
  if(post){
    resp.json({
    status:"success",
    message:" post successfully fetched",
    allPost
  })
  }
  else{
    resp.json({
    status:"success",
    message:"no post availaible for given id",
    allPost
  })
  }


})
//delete post 
//route delete /api/vi/posts/:id
//private
exports.deletePost=asyncHandler(async(req,res,next)=>{
const postId=req.params.id;
await Post.findByIdAndDelete(postId);
resp.json({
    status:"success",
    message:"post deleted successfully",
  })
})
//updste posts
//put /api/vi/posts/:id
exports.updatePost=asyncHandler(async(req,resp)=>{
   postId=req.params.id;
   const post=req.body;
   const updatedPost=await Post.findByIdAndUpdate(postID,post,{new:true,runValidators:true});
   resp.json({
    status:"success",
    message:"post updated successfully",
    updatedPost
  })

})