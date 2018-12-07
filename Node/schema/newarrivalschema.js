const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    item:{type:String},
    per_plate:{type:String},
});

module.exports=mongoose.model("newarrival_collections",userSchema);