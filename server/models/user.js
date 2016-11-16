var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  user_name: String,
});

mongoose.model('User', UserSchema);