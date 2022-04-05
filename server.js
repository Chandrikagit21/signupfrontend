const express= require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const router=require("./routes/routes")
const cors=require("cors")
dotenv.config()
mongoose.connect(process.env.database_access,()=>console.log("db is connected"))
//mongoose.connect("mongodb+srv://ChandrikPV:Cram1234@cluster0.0ny4v.mongodb.net/mytable?retryWrites=true&w=majority").then((res)=>console.log("connected")).catch((err)=>console.log("err"))
app.use(express.json)
app.use(cors())
app.use("/app",router)



app.listen(4000,()=>console.log("server is connected"))
