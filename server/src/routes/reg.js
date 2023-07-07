const express=require("express");
const routerRegister=express.Router();

routerRegister.post("/register",(req,res)=>{
    res.send("THIS IS REG PAGE");
    console.log(req.body);
})

module.exports = routerRegister;