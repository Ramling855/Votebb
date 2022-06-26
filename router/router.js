const express=require("express")
const router=express.Router()
const path=require("path")
const multipaty=require("connect-multiparty")
const multipartyMiddleware=multipaty({uploadDir:path.join(__dirname,"data")})
const {postdata,getdata}=require("../controller/controller")
router.post("/post",multipartyMiddleware,postdata)
router.get("/get",getdata)
module.exports=router