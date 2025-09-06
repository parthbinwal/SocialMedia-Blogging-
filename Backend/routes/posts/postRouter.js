const express=require('express');
const {createPost}=require('../../controllers/posts/postsController')
const isLoggedIn=require('../../middlewares/isLoggedIn')
const postRouter=express.Router();
postRouter.post("/",isLoggedIn,createPost);
module.exports=postRouter;
