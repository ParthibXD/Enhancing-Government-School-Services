import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const querySchema=new Schema(
    {
        title:{
            type:String,
            required:true,
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
        }
    },
    {
        timestamps:true
    }
)

querySchema.plugin(mongooseAggregatePaginate)
export const Query=mongoose.model("Query",querySchema)