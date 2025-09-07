const express=require('express');
const {createPost, getAllPosts, getPost, deletePost, updatePost}=require('../../controllers/posts/postsController')
const isLoggedIn=require('../../middlewares/isLoggedIn')
const postRouter=express.Router();
postRouter.post("/",isLoggedIn,createPost);
postRouter.get("/",getAllPosts);
postRouter.get("/:id",getPost);
postRouter.delete("/:id",isLoggedIn,deletePost);
postRouter.put("/:id",isLoggedIn,updatePost);
module.exports=postRouter;
