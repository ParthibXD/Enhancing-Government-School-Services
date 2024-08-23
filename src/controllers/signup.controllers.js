import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken";
import mongoose from "mongoose"
import { Signup } from "../models/signup.models.js"


const generateAccessAndRefreshTokens = async(userId)=>
    {
        try {
            const user=await Signup.findById(userId);
            const accessToken=user.generateAccessToken();
            const refreshToken=user.generateRefreshToken();
    
            user.refreshToken = refreshToken;
            await user.save({ validateBeforeSave: false});
    
            return {accessToken, refreshToken};
    
        } catch (error) {
            throw new ApiError(500, "Something went wrong while generating refresh and access token")
        }
    }
    

const userSignup = asyncHandler(async(req,res) =>{
    const {username,email,password}=req.body;
    console.log(req.body)

    console.log(email,"hey")
    if([username,email,password]
        .some((fields)=>fields.trim() === "")){
            throw new ApiError(400, "Invalid Input");
        }

    if(username === ""){
        throw new ApiError(400, "Invalid Username")
    }


    const oldUser=await Signup.findOne({
        $or:[{username},{email}]
    })

    if(oldUser){
        throw new ApiError(400, "User is already Registered!!! Login In")
    }

    const user=await Signup.create({

        username: username.toLowerCase(),
        email,
        password,
        
    })


    if(!user){
        throw new ApiError(500, "Error IN SERVER")
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            user,
            "User Registered Successfully !!!"
        )
    )
})

const userSignin=asyncHandler(async(req,res)=>{
    const {email,password} =req.body

    // console.log(req.body);
    

    if(!email || !password){
        throw new ApiError(400, "Invalid Entry")
    }
    
    const user=await Signup.findOne({email})

    if(!user){
        throw new ApiError(404, "User not found")
    }

    const isPasswordValid=user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid User credential")
    }
    
    const {accessToken, refreshToken} = 
    await generateAccessAndRefreshTokens(user._id)

    const loggedInUser=await Signup.findById(user._id).select
    ("-password -refreshToken")

    const options={
        httpOnly: true,
        secure: true
    }

    return res.
    status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged in Successfully"
        )
    )

})

export {
    userSignup, userSignin,generateAccessAndRefreshTokens
}