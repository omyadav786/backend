import mongoose from "mongoose";

const userSchema = new MOngoose.Schema({
    userName :{
        type:String,
        requried:true,
        lowercase:true,
        unique:true,
        index:true,
        trim:true
    },
    email:{
        type:String,
        requried:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    fullname:{
        type:String,
        requried:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,
        requried:true
    },
    coverImage:{
        type:String,
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        requried:true
    },
    refreshToken:{
        type:String,
    }
},
{
    timestamps:true
});

export const User = mongoose.model("User", userSchema);