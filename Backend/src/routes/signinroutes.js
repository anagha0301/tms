const express=require('express');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken')
const signinRouter =express.Router();
const Registerdata =require('../models/Registerdata');
function verifyToken(req,res,next){
    if(!req.headers.authorization)
    {
        return res.status(401).send('unauthorized request')
    }
    let token=req.headers.authorization.split(' ')[1]
    if(token ==='null')
    {
       return res.status(401).send('unauthorized request')
    }
    let payload=jwt.verify(token,'secretkey')
    console.log(payload)
    if(!payload)
    {
       return res.status(401).send('unauthorized request')
    }
    req.userId=payload.subject
    next()
}
signinRouter.post('/',async (req, res) =>{
	console.log(req.body);
    try{
    const email=req.body.email;
    const password=req.body.password;
    const useremail= await Registerdata.findOne({email:email});
    const isMatch=  await bcrypt.compare(password,useremail.password);
    // const token = await useremail.generateAuthToken();
    // console.log(token);
    // res.cookie("jwt",token,{
    //     expires:new Date(Date.now() + 30000),
    //     httpOnly:true
    //   });

    if(isMatch){
        console.log("confirm");
        let payload={subject:useremail.email+useremail.password}
                let token =jwt.sign(payload,'secretkey')
                res.status(200).send({token});
    }
    else{
        console.log("invalid password")
    }
}
catch(error){
res.status(400).send("inalid login details")
}

});
module.exports=signinRouter;