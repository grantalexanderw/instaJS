var data = require('../Frienddata.json');

exports.view = function(req, res){
	res.render('index');
};

exports.signin = function(req, res){
	res.render('signin');
};

exports.calendar = function(req, res){
	res.render('calendar');
};

exports.welcome = function(req, res){
	res.render('welcome');
};

exports.signup = function(req, res) {
	res.render('signup');
};

exports.addevent = function(req,res){
	res.render('addevent');
};

exports.friends = function(req, res){
	res.render('friends', data);
};

exports.forgot = function(req, res){
	res.render('forgot');
};