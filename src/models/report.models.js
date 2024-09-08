import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const reportSchema=new Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Signup"
    },
    query:{
        type:Schema.Types.ObjectId,
        ref:"Query"
    }
},
{
    timestamps:true
})

reportSchema.plugin(mongooseAggregatePaginate)
export const Report=mongoose.model("Report",reportSchema)
