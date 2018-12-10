const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    oneplate_price:{type:String},
    twoplate_price:{type:String},
},{ versionKey: false });

module.exports=mongoose.model("sandwich_collections",userSchema);