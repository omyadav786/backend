import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// your existing code
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDb from "./db/index.js";

import dotenv from "dotenv";

import app from "./app.js";

dotenv.config({
    path: "./.env"
})


connectDb()

.then(() =>{
    app.listen(process.env.PORT || 8000 , () =>{
        console.log(`Server started on port ${process.env.PORT || 8000}`);
    })
})

.catch((error) =>{
    console.log("Error from DB connection" , error);
})



























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