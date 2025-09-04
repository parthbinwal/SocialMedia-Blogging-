const mongoose=require(mongoose);
const commentSchema=mongoose.Schema({

message:{
  type:String,
  required:true
},
author:{
  type:mongoose.Schema.Types.ObjectId,ref:"User",
  required:true
},
postId:{
  type:mongoose.Schema.Types.ObjectId,ref:"Post",
  required:true

}
},{timestamps:true});
const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;