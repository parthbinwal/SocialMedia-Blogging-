const globalErrorHandler=(error,req,resp,next)=>{
  const status=error?.status ? error.status : "failed";
  const stack=error?.stack
  const message=error?.message
resp.status(500).json({
  status,message,stack
})}
const notFound=(req,resp,next)=>{
   let error=new Error(`cannot find the route for ${req.originalUrl} at the server`)
      next(error)
    }
module.exports={globalErrorHandler,notFound}