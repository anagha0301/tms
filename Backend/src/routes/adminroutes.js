const express=require('express');
const adminRouter =express.Router();
const jwt = require('jsonwebtoken')
username='admin';
password='1234';
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
adminRouter.post('/',(req, res) => {
  let userData = req.body
  console.log(userData)
    
      if (!username) {
        res.status(401).send('Invalid Username')
      } 
      
      else if ( password !== userData.pass) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: username+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    
  })
  module.exports=adminRouter;