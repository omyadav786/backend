import mongoose from "mongoose";
const {DB_name} = require("./contants.js");
import connectDb from "./db";
connectDb();

























// const {DB_name} = require("./contants.js");
// import express from "express";
// const app = express();
// (async () => {
//   try{
//     await mongoose.connect('${process.env.MONGODB_url}/${DB_name}');
//     app.on((error)=>{
//         console.error(error);
//         throw error;  
//     })

//     app.listen(process.env.PORT ,() =>{
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })
//   }catch(err){
//     console.error(err);
//     throw err;
//   }
// })();