import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config({path:"./config.env"})

let conn = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODBSTRING)
        console.log("connection with mongodb was successful !")
    }catch(err){
        console.log("Unable to conect with mongodb !",err)
    }
}

conn()