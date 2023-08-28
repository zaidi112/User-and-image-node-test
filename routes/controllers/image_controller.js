const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")
const image = require("../../models/imagemodel");

const imagepublic = asyncHandler(async(req, res)=>{
    const image = await Image.find({imageurlpublic});
    res.status(200).json(image) 

});

const imageprivate = asyncHandler(async(req, res)=>{
    const image = await Image.find({imageurlprivate});
    res.status(200).json(image) 
    const privateimg = await image.findOne({imageprivate}); 
    if(privateimg){
        const accesswebToken = jwt.sign({
            image:{
                imgname: privateimg.pimg
            },
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: '15m'});
        res.status(201).json({accesswebToken})

    }else{
    res.status(401)
    throw new Error("Cant view image")
    }
    res.json({message:"Image is here"});
    
});

module.exports = {imagepublic,imageprivate}