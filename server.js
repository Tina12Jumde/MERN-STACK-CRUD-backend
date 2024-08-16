import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"


import "./databse/conn.js"

dotenv.config({path:"./config.env"})

import{ApiRouter} from "./routers/apirouter.js"

let port = process.env.port

let app = express()

let corsOption={
    origin: "*"
}

app.use(cors(corsOption))

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(ApiRouter)

fn1()

function fn1 () {
    console.log("hello")
}

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})























