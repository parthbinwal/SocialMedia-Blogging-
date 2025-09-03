const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
title:{
  type:String,
  required:true
},
image:{
  type:String,
  default:""
},
claps:{
type:Number,
default:0
},
content:{
  type:String,
  required:true
}
})