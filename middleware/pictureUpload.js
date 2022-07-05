const uploader = require("../utilities/singlePostUpload");

function pictureUpload(req,res,next){
    const upload=uploader(
        "image",
        ["image/jpeg",'image/jpg','image/png'],
        10000000,
        "only .jpg, jpeg or .png format allowed!"
    )

   //call the function

   upload.any()(req,res,err =>{
       if(err){
           res.status(500).json({
               errors:{
                   image:{
                       msg:err.message
                   }
               }
           })
       }
       else{
           next();
       }
   })


}

module.exports= pictureUpload;