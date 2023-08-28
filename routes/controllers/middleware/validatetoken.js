const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authhheader = req.headers.Authorization || req.headers.authorization;
    if(authhheader && authhheader.startsWith("Bearer")) {
        token = authhheader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT,(err,decoded) => {
            if(err){
                res.status(401)
                throw new Error("User is not Authorized");
            }
            req.user = decoded.user;
            next(); 
        });
        if(!token){
            res.status(401)
            throw new Error("User is not authorized or token is missing");
        }
    }

});

module.exports = validateToken;