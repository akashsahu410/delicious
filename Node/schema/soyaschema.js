const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    half_price:{type:String},
    full_price:{type:String},
},{ versionKey: false });

module.exports=mongoose.model("soya_collections",userSchema);