const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken')
mongoose.connect('mongodb+srv://userone:userone@ictaktms.hjqbm.mongodb.net/TrainerManagement?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

registerSchema = new Schema( {	
		
	firstname: String,
	lastname:String,
	email: String,
	password: String,
    confirm:String,	
	phone:Number,
    // tokens:[{
    //     token:{
    //         type:String,
    //         required:true
    //     }
    // }]
})

// registerSchema.methods.generateAuthToken=async function(){
//     try{
//         console.log(this._id);
        
//         const token=jwt.sign({_id:this._id.toString()},"trainermanagementsystemictakacademy");
//         this.tokens=this.tokens.concat({token:token})
//         // console.log(token);
//         await this.save();
//         return token;

//     }
//     catch(error){
//             res.send("the error part"+error);
//             console.log("the error part"+error);
//     }
// }
registerSchema.pre("save",async function(next){
    if(this.isModified("password")){
    // const password=await bcrypt.hash(password,10);
    
    console.log(`the current password is ${this.password}`);
    this.password=await bcrypt.hash(this.password,10);
    console.log(`the current password is ${this.password}`);
    this.confirm=undefined;
    
    }
    next();
})
var Registerdata = mongoose.model('Registerdata', registerSchema);

module.exports = Registerdata;