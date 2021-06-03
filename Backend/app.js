const express = require('express');
const jwt = require('jsonwebtoken')
const Applicationlist = require('./src/models/Applicationlist');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
const signupRouter =require('./src/routes/signuproutes');
const signinRouter =require('./src/routes/signinroutes');
const adminRouter=require('./src/routes/adminroutes');
const trainerRouter=require('./src/routes/trainerroutes')
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/admin',adminRouter);
app.use('/trainer',trainerRouter)

// app.post('/insert', function (req, res) {
   
//   console.log(req.body);

//   var applicationlist = {
//     name: req.body.applicationlist.name,
//     email: req.body.applicationlist.email,
//     phone: req.body.applicationlist.phone,
//     address: req.body.applicationlist.address,
//     qualification: req.body.applicationlist.qualification,
//     skillset: req.body.applicationlist.skillset,
//     current: req.body.applicationlist.current,
//     designation: req.body.applicationlist.designation,
//     appliedcourse: req.body.applicationlist.appliedcourse,
//     imageUrl: req.body.applicationlist.imageUrl,
//   }
//   var applicationlist =new Applicationlist(applicationlist);
//   applicationlist.save();
// });
// app.get('/Applicationlist', function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
//   Applicationlist.find()
//     .then(function (applicationlists) {
//       res.send(applicationlists);

//     });

// });
// app.get('/:id',function (req,res){
//   const id= req.params.id;
//   console.log(id)
//   Applicationlist.findOne({_id:id})
//   .then(function(trainer){
//      res.send(trainer);
//   })
// });
app.listen(3000, function(){
    console.log('listening to port 3000');
  });