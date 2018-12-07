const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    half_price:{type:String},
    full_price:{type:String},
});

module.exports=mongoose.model("chowmein_collections",userSchema);