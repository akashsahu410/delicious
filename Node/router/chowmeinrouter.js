const express=require('express')
const app=express.Router();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const userapi=require('../api/chowmeinapi')

app.post('/get',async (req,res)=>{
    try{
        console.log("inside get of chowmein")
        let data=await userapi.finddata()
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in chowmein router",err)
        res.status(404).send(err)
    }
})

app.post('/delete',async (req,res)=>{
    try{
        console.log("inside delete of chowmein",req.body)
        let data=await userapi.deletedata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send("data deleted")
    }
    catch(err){
        console.log("error in chowmein router",err)
        res.status(404).send(err)
    }
})

//to chnage the data
app.post('/change',async (req,res)=>{
    try{
        console.log("inside change of chowmein ",req.body)
        let data=await userapi.changedata({_id:req.body.id},req.body)
        console.log("data get from api in router",data)
        res.status(200).send("data changed")
    }
    catch(err){
        console.log("error in chowmein router",err)
        res.status(404).send(err)
    }
})
//to add the items
app.post('/add',async (req,res)=>{
    try{
        console.log("inside add of chowmein",req.body)
        let data=await userapi.adddata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send("item added")
    }
    catch(err){
        console.log("error in chowmein router",err)
        res.status(404).send(err)
    }
})

module.exports=app;