import { Router } from "express";
import {addReport,getUserQueries} from "../controllers/report.controllers.js"
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

router.route("/userqueries").get(verifyJWT, getUserQueries);

export default router