const mongoose=require("mongoose")
const dbconnet=(URL)=>{
  return  mongoose.connect(URL)
}
module.exports=dbconnet;