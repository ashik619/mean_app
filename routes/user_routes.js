var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.set('debug', true);
var User = require('../models/user_model.js');

router.post('/create', function(req, res) {
	User.findOne({phoneNumber : req.body.phone_number},function(err, user){
		if(user){
			if(user.playerId == req.body.player_id){ 
				res.json({success: false, msg : 1});
			}else{
				res.json({success: false, msg : 2});
			}
		}else{
			var temp = new User();
			temp.name = req.body.name;
			temp.phoneNumber = req.body.phone_number;
			temp.playerId = req.body.player_id
			temp.save(function(err){
				if(err){
					return res.json({ success: false , 
						message: 'Error!' });
				}
			});
			res.json({ success: true , msg: 0 });
			
		}
		});
	
});

router.get('/getuser', function(req, res) {
	console.log('api hit');
	User.find({phoneNumber : req.query.phone_number},
	function(err, user) {
		if (err) {
			return res.json({ success: false , 
				message: 'Error!' });
			}
		// return the users
		console.log('api succes');
		return res.json({ success: true , user: user });
	});
	
});

module.exports = router;
