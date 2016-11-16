var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

module.exports = (function() {
 return {
 	create: function(req, res){
    	console.log(req.body)
	  	var item = new Item({user_name:req.body.user_name, title:req.body.title, description:req.body.description, friend_name:req.body.friend_name})
	  	item.save(function(err,results){
	  		if(err){
	  			console.log("something went wrong")
	  		}	
	  		else{
	  			console.log(" added an item!")
	  			res.json(results)
	  		}	
	  	})
  	  },
  	show: function(req, res){
			Item.find({}, function(err,results){	  	
	  		if(err){
	  			console.log("something went wrong")
	  		}	
	  		else{
	  			console.log("added an item!")
	  			res.json(results)
	  		}	
	  	})
  	  },
  	showuser: function(req, res){
  			console.log(req.params.name)
			Item.find( { $or: [{user_name:req.params.name}, {friend_name:req.params.name}]}, function(err,results){	  	
	  		if(err){
	  			console.log("something went wrong")
	  		}	
	  		else{
	  			console.log("added an item!")
	  			res.json(results)
	  		}	
	  	})
  	  },
  	update: function(req, res){
  			console.log(req.params)
			Item.update({_id:req.params.id}, {complete:true}, function(err,results){
				console.log(results.complete)
	  		if(err){
	  			console.log("something went wrong")
	  		}	
	  		else{
	  			console.log("updated item  list!")
	  			res.json(results)
	  		}	
	  	})
  	  },


	}
})();