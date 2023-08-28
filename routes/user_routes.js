const express = require("express")
const router = express.Router();
const {loginUser} = require("./controllers/usercontroller");
const validateToken = require("./controllers/middleware/validatetoken");


router.post("/login",loginUser);

module.exports = router
