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

    const isPasswordValid=await user.isPasswordCorrect(password)

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


const userLogout= asyncHandler(async (req,res)=>{
    await Signup.findByIdAndUpdate(
        req.user_id,
        {
            $unset:{
                refreshToken:1,
            }
        },
        {
            new:true
        }
    )


    const options={
        httpOnly: true,
        secure: true
    }


    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const userInfo = asyncHandler ( async (req  , res) => {
    
    

    return res
    .status(200)
    .json(new  ApiResponse(
        200, 
        req.user, 
        "Current User fetched Successfully"
    ))
})

const userProfile = asyncHandler (async (req,res) =>{
    const {username}= req.params

    if(!username?.trim()){
        throw new ApiError(400, "Username is Missing")
    }

    const user= await Signup.aggregate([
        {
            $match:{
                username:username?.toLowerCase()
            }
        }
        ,{
            $project:{
                username:1,
                email:1,
            }
        }
    ])

    if(!user.length){
        throw new ApiError(404, "User not found")
    }


    return res.status(200)
    .json(
        new ApiResponse(
            200, 
            user[0],
            "User Profile fetched"
        )
    )


})

const changeUserDetails = asyncHandler(async(req,res) =>{
    const {email} = req.body

    if( !email){
        throw new ApiError(400, "Invalid Input")
    }

    const user=await Signup.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                email:email
            }
        },
        {
            new:true,
        }
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "Accounts details updated"
        )
    )
})

const changePassword = asyncHandler(async(req,res)=>{
    const {oldpassword,newpassword}=req.body

    const user=await Signup.findById(req.user?._id)

    const isPasswordCorrect=await user.
    isPasswordCorrect(oldpassword)

    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid Password")
    }

    user.password=newpassword
    await user.save({validateBeforeSave:false})

    return res.status(200)
    .json(new ApiResponse(
        200, 
        {},
        "Password Changed"
    ))
})

export {
    userSignup, changeUserDetails,userSignin,generateAccessAndRefreshTokens,changePassword, userLogout,userInfo,userProfile
}