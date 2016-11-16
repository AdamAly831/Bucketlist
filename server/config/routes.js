var users = require('./../controllers/users.js')
var items = require('./../controllers/items.js')

module.exports = function(app){
	app.get('/users', function(req,res){
		users.show(req,res)
	})
	app.post('/createuser', function(req,res){
		users.create(req,res)
	})
	app.post('/createitem', function(req,res){
		items.create(req,res)
	})
	app.get('/items', function(req,res){
		items.show(req,res)
	})
	app.post('/item/:id', function(req,res){
		items.update(req,res)
	})	
	app.get('/userprofile/:name', function(req,res){
		items.showuser(req,res)
	})
};