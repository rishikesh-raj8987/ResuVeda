const express = require('express')

const authRouter = express.Router()

//require all the routes here 
const authRouter = require("./routes/auth.routes")

// using all the routes here
app.use("/api/auth",authRouter)     


module.exports =app