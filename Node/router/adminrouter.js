const express=require('express')
const app=express.Router();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const userapi=require('../api/adminapi')


app.post('/login',async (req,res)=>{
    try{
        console.log("inside login ",req.body)
        let data=await userapi.finddata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})

app.post('/changePassword',async (req,res)=>{
    try{
        console.log("inside change ",req.body)
        let data=await userapi.changepassword({email:req.body.email},{password:req.body.new_password})
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})

app.post('/profile',async (req,res)=>{
    try{
        console.log("data get in router",req.body)
        let data=await userapi.findbloodgroup(req.body)
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})
module.exports=app;