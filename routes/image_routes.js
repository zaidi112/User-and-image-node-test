const express = require("express")
const router = express.Router()
const{imagepublic,imageprivate} = require("./controllers/image_controller")
const validateToken = require("./controllers/middleware/validatetoken");


router.get("/public/:img",imagepublic)
router.get("/private/:img",imageprivate)

module.exports = router