const asyncHandler=require('express-async-handler');
const Comment=require('../../models/Comments/Comment');
const Post=require('../../models/Posts/Post');
//create a new comment
//post private /api/v1/comments/:postid;
exports.createComment=asyncHandler(async(req,resp)=>{
  const {message}=req.body;
  const postId=req.params.postId;
  const comment=await Comment.create({message,authorId:req?.userAuth?._id,postId})
  await Post.findByIdAndUpdate(postId,{$push:{comments:comment._id}},{new:true})
  resp.status(201).json({
    status:"success",
    message:"comment sucessfully created",
    comment
  })

})