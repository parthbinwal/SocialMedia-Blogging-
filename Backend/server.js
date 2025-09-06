const express=require('express');
require('dotenv').config();
const app=express();
const usersRouter=require('./routes/users/usersRouter')
const connectDB=require('./config/database')
const {globalErrorHandler,notFound}=require('./middlewares/globalErrorHandler');
const categoriesRouter = require('./routes/categories/categoriesRouter');
connectDB();
//setup the router
app.use(express.json());
app.use('/api/v1/users',usersRouter)
//setup the category router
app.use('/api/v1/categories',categoriesRouter)
//not found error handler
app.use(notFound)
//global error handler4
app.use(globalErrorHandler)
app.listen(process.env.PORT ,(req,res)=>{
console.log(`Server is running on port: ${process.env.PORT}`)
})