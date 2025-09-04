const express=require('express');
require('dotenv').config();
const app=express();
const usersRouter=require('./routes/users/usersRouter')
const connectDB=require('./config/database')
connectDB();
//setup the router
app.use(express.json());
app.use('/api/v1/users',usersRouter)
app.listen(process.env.PORT ,(req,res)=>{
console.log(`Server is running on port: ${process.env.PORT}`)
})