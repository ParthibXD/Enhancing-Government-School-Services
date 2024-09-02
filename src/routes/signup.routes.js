import { Router } from "express";

import {userSignup,
    userSignin,
    userLogout,
    userInfo,
    userProfile,
    changeUserDetails,
    changePassword
} from "../controllers/signup.controllers.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/signup").post(userSignup)
router.route("/signin").post(userSignin)
router.route("/logout").post(verifyJWT,userLogout)
router.route("/info").get(verifyJWT,userInfo)
router.route("/c/:username").get(verifyJWT,userProfile)
router.route("/update").patch(verifyJWT,changeUserDetails)
router.route("/change").post(verifyJWT,changePassword)



export default router