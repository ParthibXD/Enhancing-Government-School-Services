import { Router } from "express";

import {userSignup,
    userSignin,
} from "../controllers/signup.controllers.js"

const router = Router()

router.route("/signup").post(userSignup)
router.route("/signin").post(userSignin)



export default router