const express=require('express');
const {createComment}=require('../../controllers/comments/commentsController');
const isLoggedIn=require('../../middlewares/isLoggedIn');
const commentRouter=express.Router();
commentRouter.post('/:postId',isLoggedIn,createComment);
module.exports=commentRouter;