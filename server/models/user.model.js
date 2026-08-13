import mongoose from "mongoose"

const usermodel= new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        unique:true,
        required:true
    },
    credit:{
        type:Number,
        default:100
    }
},{timestamp:true})

const User= mongoose.model("User","usermodel");

export default User;