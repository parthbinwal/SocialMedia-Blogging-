const mongoose=require('mongoose');
const connectDB=async ()=>{
try {
 await  mongoose.connect("mongodb://localhost:27017/bloggytech");
 console.log("successfully connected mongo");
} catch (error) {
  console.log("connection failed",error.message);
}
}
module.exports=connectDB;