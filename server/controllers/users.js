var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function() {
 return {
    create: function(req, res){
      console.log(req.body.name)
      User.findOne({user_name: req.body.name}, function(err,results){
          
        console.log(results)
        if(results == null){  
  	  	  var user = new User({user_name:req.body.name})
  	  	  user.save(function(err,results){
  	  		if(err){
  	  		   console.log("oops  ")
  	  		}	
  	  		else{
  	  			console.log(" added an user!")
  	  			res.json(results)
  	  		 }
          })
        }	
        else{
          console.log("user already exists!")
          res.json(results)
        }
      })
  },
  	    show: function(req, res){
  	    	User.find({}, function(err,results){
  	    		if(err){
  	    			console.log(err);
  	    		}
  	    		else{
  	    			res.json(results);
  	    		}
  	    	})
  	  },
	}
})();