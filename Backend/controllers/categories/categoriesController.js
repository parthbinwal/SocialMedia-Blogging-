const Category=require('../../models/Categories/Category');
const asyncHandler=require('express-async-handler');
//@create category route 
//private after login it will be availaible
// route post /api/v1/categories/
exports.createCategory=asyncHandler(async (req,resp,next)=>{
   const {name}=req.body;
   const isCategoryPresent= await Category.findOne({name})
   if(isCategoryPresent){
   throw new Error("category already exist");
   }
   const category=await Category.create({name,author:req?.userAuth?._id})
   resp,json({
      status:"success",
      message:"category created successfully",
      category,
   })
}
);