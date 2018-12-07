const express=require('express')
const app=express.Router();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const userapi=require('../api/pastaapi')


app.post('/get',async (req,res)=>{
    try{
        console.log("inside get of pasta ")
        let data=await userapi.finddata()
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in pasta router",err)
        res.status(404).send(err)
    }
})

app.post('/delete',async (req,res)=>{
    try{
        console.log("inside delete of pasta ",req.body)
        let data=await userapi.deletedata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send("data deleted")
    }
    catch(err){
        console.log("error in pasta router",err)
        res.status(404).send(err)
    }
})

//to chnage the data
app.post('/change',async (req,res)=>{
    try{
        console.log("inside change of pasta ",req.body)
        let data=await userapi.changedata({_id:req.body.id},req.body)
        console.log("data get from api in router",data)
        res.status(200).send("data changed")
    }
    catch(err){
        console.log("error in pasta router",err)
        res.status(404).send(err)
    }
})
//to add the items
app.post('/add',async (req,res)=>{
    try{
        console.log("inside add of pasta ",req.body)
        let data=await userapi.adddata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send("item added")
    }
    catch(err){
        console.log("error in pasta router",err)
        res.status(404).send(err)
    }
})

module.exports=app;