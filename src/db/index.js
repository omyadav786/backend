import mongoose from 'mongoose';
import {DB_name} from "../contants.js";

const connectDb = async () => {
    try{
        const connet = await mongoose.connect(`${process.env.MONGODB_url}/${DB_name}`)
        console.log( `Connected to database: ${DB_name} :${connet.connection.host}`);
    }catch(error){
        console.error("Error connecting to database:", error);
        throw error;
        process.exit(1);
    }

}

export default connectDb;