import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/connectDb.js"
const app= express();

const port= process.env.PORT || 6000;

app.get("/",(req,res)=>{
    return res.json({
        message:"Server Started"
    })
})

app.listen(port,()=>{
    console.log(`Server is listining at port ${8000}`)
    connectDb();
})