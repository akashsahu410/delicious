const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    price:{type:String},
    extra_cheese:{type:String}
},{ versionKey: false });

module.exports=mongoose.model("pizza_collections",userSchema);