import { Router } from "express";
import {addReport} from "../controllers/report.controllers.js"
import {upload} from "../middleware/multer.middleware.js"
import {verifyJWT} from "../middleware/auth.middleware.js"


const router=Router()

router.use(verifyJWT,upload.fields([
        {
            name:"image",
            maxCount:1
        }
    ])
)

router.route("/:queryId").post(addReport)

export default router