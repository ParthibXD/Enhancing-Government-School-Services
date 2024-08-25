import { Router } from "express";

import {userSignup,
    userSignin,
    userLogout
} from "../controllers/signup.controllers.js"

const router = Router()

router.route("/signup").post(userSignup)
router.route("/signin").post(userSignin)
router.route("/logout").post(userLogout)



export default router