import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // Allow sending cookies and headers
}));

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