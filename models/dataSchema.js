import mongoose, {model, modelNames} from "mongoose" ;

let dataSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    city: String,
    pincode:Number,
    age: Number,
    address: String,
    dob: String
})


//[pre,post]

dataSchema.pre("save",function (){
    this.timeStamp = `${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`
})

let DataModel = new model("datas", dataSchema)


export {DataModel}

