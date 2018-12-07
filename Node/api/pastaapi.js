const userdb=require('../schema/pastaschema')
module.exports={
    
    //to find data
    finddata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in finddata",data)
            userdb.find(data,(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
//tto delete the data 
    deletedata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in deletedata",data)
            userdb.remove(data,(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    //to change the data
    changedata(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in changedata",data)
            userdb.updateOne(key,{$set:data},(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
     //to add the data
   adddata(data){
    return new Promise((resolve,reject)=>{
        console.log("inside the api in changedata",data)
        userdb.create(data,(err,result)=>{
            if(err)
            {
                console.log("error in api main",err)
                reject(err)
            }
            else{
                resolve(result)
            }
        })
    });
},
}