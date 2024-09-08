import { Router } from "express";

import { addQuery } from "../controllers/query.controllers.js";
import {upload} from "../middleware/multer.middleware.js"
import {verifyJWT} from "../middleware/auth.middleware.js"

const router =Router()

router.route("/addquery").post(
    verifyJWT,
    upload.fields([
        {
            name:"image",
            maxCount:1
        }
    ]),
    addQuery
)

export default router