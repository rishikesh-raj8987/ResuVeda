const usreModel = require("../models/user.model")

/**  
 *  @name registerUserController
 *  @description Register a new user,expect username,email and password in the request body
 *  @access Public
 */

async function registerUserController(req,res){
    const {username,email,password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({
            message: "Please provide username,email and password"
        })
    }

    const isUserAlreadyExist = await usreModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(isUserAlreadyExist){

        /* is user already exist with the same username or email address then return error response */
        return res.status(400).json({
            message: "Account already exist with this username or email address"
        })
    }
}  

module.exports = {
    registerUserController
}