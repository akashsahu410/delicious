const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    price:{type:String},
},{ versionKey: false });

module.exports=mongoose.model("hotdrinks_collections",userSchema);