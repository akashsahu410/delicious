const userdb=require('../schema/adminschema')
module.exports={
    
    //to check login data
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
   
    //to change the password
    changepassword(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.update(key,{$set:data},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
}