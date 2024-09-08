import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js";

import {
    uploadOnCloudinary,
    deleteOnCloudinary
} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import mongoose, { isValidObjectId } from "mongoose";
import { Query } from "../models/query.models.js";
import { Report } from "../models/report.models.js";

const addReport=asyncHandler(async(req,res)=>{
    const {queryId} =req.params;
    const {title,content}= req.body;

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

    

    console.log(queryId);
    
    if(!isValidObjectId(queryId)){
        throw new ApiError(400, "Id invalid")
    }

    const query=await Query.findById(queryId)

    if(!query){
        throw new ApiError(400, "Query Not found")
    }

    const report=await Report.create({
        title,
        content,
        image:image.url,
        owner:req.user?._id,
        query:queryId
    })

    if(!report){
        throw new ApiError(500, "Report Failed, Try Again")
    }

    return res.status(201)
    .json(new ApiResponse(
        201,
        report,
        "Report Added"
    ))
})

export{
    addReport
}