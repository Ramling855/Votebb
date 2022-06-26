const mongoose=require("mongoose")
const Vote=new mongoose.Schema({
    photo:{
        type:String,
    },
    downvote:{
        type:Number,
    },
    upvote:{
        type:Number,
    }
})
const voting=mongoose.model("voter",Vote)
module.exports=voting;