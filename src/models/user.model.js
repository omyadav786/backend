import mongoose from "mongoose";
import jwt from "jsonwebtoken";
// jwt is a berer token that is used to authenticate the user. It is generated when the user logs in and is sent to the client. The client then sends the token back to the server with each request. The server then verifies the token and allows the user to access the requested resource.
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
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

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.mothods.ispasswordorrect = async function (password){
    return await bcrypt.compare(password , this.password);
    // this.password is the hashed password stored in the database, and password is the plain text password provided by the user during login. The compare function checks if they match.
}
userSchema.mothods.generateAcessToken = funtion (){
    jwt.sigh(
        {
            _id:this._id,
            userName:this.userName,
            email:this.email,   
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION
        }
    )
}

userSchema.methods.generatefreshToken = function (){
    jwt.sigh(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION
        }
    )
}
export const User = mongoose.model("User", userSchema);