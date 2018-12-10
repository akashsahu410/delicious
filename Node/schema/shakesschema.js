const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    price:{type:String},
    with_cream:{type:String},
},{ versionKey: false });

module.exports=mongoose.model("shakes_collections",userSchema);