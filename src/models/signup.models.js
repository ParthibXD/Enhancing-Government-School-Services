
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";//jwt is a bearer token
import bcrypt from "bcrypt";

const signupSchema =new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password:{
            type:String,
            required:[true,"Password id required"]
        },
    },
    {
        timestamps:true
    }
);
//before saving in user profile
signupSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next;

    this.password=await bcrypt.hash(this.password, 10)
    next()
})

signupSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password)
}

signupSchema.methods.generateAccessToken=function(){
    //to generate token
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
signupSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
    {
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const Signup = mongoose.model("Signup",signupSchema)

