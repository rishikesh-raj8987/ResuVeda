const express = require('express')
const authController = require("../config/controller/auth.controller")

const authRouter = express.Router()
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)
/**
 * @route POST /api/auth/login
 * @description Login with email and password
 * @access Public
 */
authRouter.post("/api/login",authController.loginUserController)
 


// //require all the routes here 
// const authRouter = require("./routes/auth.routes")

// // using all the routes here
// app.use("/api/auth",authRouter)     


module.exports = authRouter