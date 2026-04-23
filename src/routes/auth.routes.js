const express = require('express')
const authController = require("../config/controller/auth.controller")

const authRouter = express.Router()
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)


//require all the routes here 
const authRouter = require("./routes/auth.routes")

// using all the routes here
app.use("/api/auth",authRouter)     


module.exports =app