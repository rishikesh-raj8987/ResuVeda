const express = require("express")
const authRouter = require("./routes/auth.routes") // add this

const app = express()

app.use(express.json())
app.use("/api/auth", authRouter) // add this

module.exports = app