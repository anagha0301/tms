const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictaktms.hjqbm.mongodb.net/TrainerManagement?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  
  name: String,
  email: String,
  phone: String,
  address: String,
  qualification: String,
  skillset: String,
  current: String,
  designation: String,
  appliedcourse: String,

});
const Applicationlist = mongoose.model('applicationlist', TrainerSchema);

// const ApprovedSchema = new Schema({
//     id:String,
//     type:String,
//     name: String,
//     email: String,
//     phone: String,
// qualification: String,
//     skillset: String,
    
    
//     appliedcourse: String,
  
//   });
//   const Approvedlist = mongoose.model('approvedlist', ApprovedSchema);

module.exports = Applicationlist;
// module.exports= Approvedlist;