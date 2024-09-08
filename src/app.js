import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import signupRouter from "./routes/signup.routes.js"

app.use("/api/v1/signup",signupRouter)

import queryRouter from "./routes/query.routes.js"

app.use("/api/v1/query",queryRouter)

import reportRouter from "./routes/report.routes.js"

app.use("/api/v1/report", reportRouter)

export { app }