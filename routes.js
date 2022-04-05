const express=require("express")
const router=express.Router()
const signuptemplate=require("../models/signupmodel")

router.post("/signup",(req,res)=>{
    const signupuser= new signuptemplate({
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signupuser.save().then(data=>{res.json(data)}).catch(err=>{res.json(err)})
})
module.exports=router