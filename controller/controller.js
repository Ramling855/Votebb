const voter=require("../model/model")
const fs=require("fs");
var cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    
    cloud_name: 'ccompony', 
    api_key: '449366357236654', 
    api_secret: 'p5nO_GgBqddAr6fOryOr6zhB2UQ',
    secure: true
  });

const postdata=(req,res)=>{
// console.log(req)
const imagePath=req.files.file.path

cloudinary.uploader.upload(imagePath,(err,result)=>{
if(err){
    console.log(err)
}else{
    const data=new voter({
        upvote:req.body.upvote,
    downvote:req.body.downvote,
photo:result.url})
data.save().then(()=>{
    console.log("data inserted")
}).catch((err)=>{
    console.log(err)
})
}
})



}

const getdata=(req,res)=>{
    voter.find().then(data=>{
      res.send(data)  
    }).catch(err=>{
        console.log(err)
    })
}

module.exports={
    postdata,
    getdata
}