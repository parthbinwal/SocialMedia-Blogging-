const mongoose=require('mongoose');
const connectDB=async ()=>{
try {
 await  mongoose.connect(process.env.MONGO_URL);
 console.log("successfully connected mongo");
} catch (error) {
  console.log("connection failed",error.message);
}
}
module.exports=connectDB;