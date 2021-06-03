const express=require('express');
const signupRouter =express.Router();

const Registerdata =require('../models/Registerdata')

signupRouter.post('/',async function(req,res){
    console.log(req.body);
    
    const item=new Registerdata({
 
    firstname:req.body.trainer.firstname,
     lastname:req.body.trainer.lastname,
     email:req.body.trainer.email,
     password:req.body.trainer.password,
     confirm:req.body.trainer.confirm,     
     phone:req.body.trainer.phone
     
          });
        // const token = await item.generateAuthToken();
        // res.cookie("jwt",token,{
        //   expires:new Date(Date.now() + 30000),
        //   httpOnly:true
        // });
        var trainer= Registerdata(item);
       await trainer.save();
      
  
      });   
 
  module.exports=signupRouter;