 var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ItemSchema = new mongoose.Schema({ 
  user_name: String,
  title: String,
  description: String,
  friend_name: String,
  complete: {type: Boolean, default: false},
  created_at: {type: Date, default: new Date},
});

mongoose.model('Item', ItemSchema);