const express=require('express');
const trainerRouter =express.Router();
const cors = require('cors');
var nodemailer=require('nodemailer');

const Applicationlist = require('../models/Applicationlist');
const  Approvedlist=require('../models/Trainerdata');

trainerRouter.post('/insert', function (req, res) {
   
    console.log(req.body);
  
    var applicationlist = {
      name: req.body.applicationlist.name,
      email: req.body.applicationlist.email,
      phone: req.body.applicationlist.phone,
      address: req.body.applicationlist.address,
      qualification: req.body.applicationlist.qualification,
      skillset: req.body.applicationlist.skillset,
      current: req.body.applicationlist.current,
      designation: req.body.applicationlist.designation,
      appliedcourse: req.body.applicationlist.appliedcourse,
      imageUrl: req.body.applicationlist.imageUrl,
    }
    var applicationlist =new Applicationlist(applicationlist);
    applicationlist.save();
  });
  trainerRouter.get('/Applicationlist', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  Applicationlist.find()
      .then(function (applicationlists) {
        res.send(applicationlists);
  
      });
 
  });
trainerRouter.get('/:id',function (req,res){
    const id= req.params.id;
    console.log(id)
    Applicationlist.findOne({_id:id})
    .then(function(trainer){
       res.send(trainer);
    })
  });
 
  // trainerRouter.get('/approvedlist/:id',function (req,res){
  //   const id= req.params.id;
  //   console.log(id)
  //   TrainerData.findOne({_id:id})
  //   .then(function(trainer){
  //      res.send(trainer);
  //   })
  // });
  trainerRouter.post('/approvedlist',async function (req, res) {
   
    console.log(req.body);
  
    var approvedlist = {
      name: req.body.trainer.name,
      email: req.body.trainer.email,
      phone: req.body.trainer.phone,
      address: req.body.trainer.address,
      qualification: req.body.trainer.qualification,
      skillset: req.body.trainer.skillset,
      current: req.body.trainer.current,
      designation: req.body.trainer.designation,
      appliedcourse: req.body.trainer.appliedcourse,
    //   imageUrl: req.body.applicationlist.imageUrl,
        typemp:req.body.trainer.typemp
    }
    var approvedlist =new  Approvedlist(approvedlist);
    approvedlist.save();
    const traineremail= await Applicationlist.findOne({email:approvedlist.email})
    console.log(traineremail);
    var transport=nodemailer.createTransport(
      {
        service:'gmail',
        auth:{
          user:'mittup2020@gmail.com',
          pass:'mittupoocha@1'
        }
      }
    )
    
    var mailOptions={
      
      from:'mittup2020@gmail.com',
      to:approvedlist.email,
      subject:'You are Approved',
      text:`Hi ${approvedlist.name}.You are approved as ${approvedlist.typemp}and your id is ${approvedlist._id}`
    }
    transport.sendMail(mailOptions,function(error,info){
      if(error){
        console.log(error)
      }
      else{
        console.log("email sent"+info.response)
      }
    })
    Applicationlist.findOneAndDelete({"_id":traineremail._id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
  
  // Getting approvedlist
  trainerRouter.get('/approvedlist',function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    console.log("approvedlist");
    // TrainerData.find()
    //   .then(function(approvedlists) {
    //     res.send(approvedlists);
    //     console.log(approvedlists);
    //   });
    Approvedlist.find()
    .then(function(approvedlist){
     
        res.send(approvedlist);
        
    });
  
  });
  module.exports= trainerRouter;