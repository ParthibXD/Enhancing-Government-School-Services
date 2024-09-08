import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js";

import {
    uploadOnCloudinary,
    deleteOnCloudinary
} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import mongoose, { isValidObjectId } from "mongoose";
import { Query } from "../models/query.models.js";

const addQuery=asyncHandler(async(req,res)=>{
    const {title} =req.body;
    const {content} =req.body;
    

    if(!content || !title) {
        throw new ApiError(400, "Improper Input")
    }

    let imagePath=req.files?.image[0].path;
    if(!imagePath){
        throw new ApiError(400, "Image Path unavailable")
    }

    const image=await uploadOnCloudinary(imagePath)
    
    if(!image){
        throw new ApiError(400, "Image is required")
    }

    const query= await Query.create({
        title,
        content,
        image:image.url,
        owner:req.user?._id

    })


    if(!query) {
        throw new ApiError(500, "Query Failed to Submit")
    }

    return res.status(200)
    .json(
        new ApiResponse(
            200, 
            query,
            "Query created Successfully"
        )
    )
})

export {
    addQuery
}