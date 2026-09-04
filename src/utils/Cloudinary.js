import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadFileOnCloudinary = async function (localFilePath){
    try{
        if(!localFilePath) return NULL;
        // Now , upload the file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto"
        })
        // now file is uploaded to cloudinary 
        console.log("File uploaded successfully on cloudinary" , response.url);
        return response;
    }catch{
        // if any error occurs then we nowk that file is stay in local storage and we have to delete it from local storage for cleaning up the storage
        fs.unlinkSync(localFilePath);
        return NULL;
    }
}