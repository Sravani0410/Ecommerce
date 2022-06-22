const express=require("express")
const connect=require("./config/db")
const app=express()


app.listen(9090,async()=>{
    try{
        await connect()
        console.log("server is running")
    }
    catch(err){
        console.log(err.message)
    }
}

)