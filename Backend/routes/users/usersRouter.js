const express=require('express');
const {register,login, getProfile}=require('../../controllers/users/usersController');
const usersRouter=express.Router();
//register
usersRouter.post('/api/v1/users/register',register);
//login 
usersRouter.post('/api/v1/users/login',login);
//profile
usersRouter.get('api/v1/users/profile/:id',getProfile);
module.exports=usersRouter;