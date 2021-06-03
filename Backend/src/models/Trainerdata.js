const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictaktms.hjqbm.mongodb.net/TrainerManagement?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const ApprovedSchema = new Schema({
  
    name: String,
    email: String,
    phone: String,
    address: String,
    qualification: String,
    skillset: String,
    current: String,
    designation: String,
    appliedcourse: String,
    typemp:String
  
  });
  const Approvedlist = mongoose.model('trainer', ApprovedSchema);
  module.exports = Approvedlist;