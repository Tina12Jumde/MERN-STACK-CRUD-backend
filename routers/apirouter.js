import express from "express" 

import {GetHome , PostAcceptFrom , GetFormData , FetchData , DeleteData} from "../controllers/apicontroller.js"

let ApiRouter=express()

ApiRouter.get("/api", GetHome)

ApiRouter.get("/getformdata", GetFormData)

ApiRouter.post("/acceptform",PostAcceptFrom )

ApiRouter.get("/fetchData", FetchData)

ApiRouter.delete("/delete/:id", DeleteData)


export {ApiRouter}