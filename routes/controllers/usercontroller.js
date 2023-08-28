const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../../models/usermodel");


//@ desc Login the user
//@route POST /api/user/login
//@access public

const loginUser = asyncHandler(async(req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const newuser = await User.findOne({username});
    if(newuser && (await bcrypt.compare(password,newuser.password))){
        const accesswebToken = jwt.sign({
            user:{
                username: newuser.username,
                id: newuser.id
            },
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: '15m'});
        res.status(201).json({accesswebToken})
    }else{
        res.status(401)
        throw new Error("Invalid email and password.")
    }
    res.json({message:"login user"});
});




module.exports = {loginUser}