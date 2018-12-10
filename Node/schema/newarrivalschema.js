const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    per_plate:{type:String},
},{ versionKey: false });

module.exports=mongoose.model("newarrival_collections",userSchema);