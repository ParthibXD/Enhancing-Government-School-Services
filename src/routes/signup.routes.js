import { Router } from "express";

import {userSignup,
    userSignin,
    userLogout,
    userInfo
} from "../controllers/signup.controllers.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/signup").post(userSignup)
router.route("/signin").post(userSignin)
router.route("/logout").post(verifyJWT,userLogout)
router.route("/info").get(verifyJWT,userInfo)




export default router