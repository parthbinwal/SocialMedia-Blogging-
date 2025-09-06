const express=require('express');
const {register,login, getProfile}=require('../../controllers/users/usersController');
const isLoggedIn=require('../../middlewares/isLoggedIn')
const usersRouter=express.Router();
//register
usersRouter.post('/register',register);
//login 
usersRouter.post('/login',login);
//profile
usersRouter.get('/profile',isLoggedIn,getProfile);
module.exports=usersRouter;