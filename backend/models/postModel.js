const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

 const postModel= new mongoose.model('Post',postSchema)

 module.exports=postModel