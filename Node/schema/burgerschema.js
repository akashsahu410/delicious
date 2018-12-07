const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    price:{type:String},
});

module.exports=mongoose.model("burger_collections",userSchema);