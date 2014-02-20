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

exports.about = function(req, res){
	res.render('about');
};

exports.addfilter = function(req, res){
	res.render('addfilter');
};

exports.contactus = function(req, res){
	res.render('contactus');
};

exports.settings = function(req, res){
	res.render('settings');
};

exports.people = function(req, res){
	res.render('people');
};

exports.friendprofile = function(req, res){
	res.render('friendprofile');
};

exports.notfollowing = function(req, res){
	res.render('notfollowing');
};

exports.notifi = function(req, res) {
	res.render('notifi');
};

exports.emptyNoti = function (req, res) {
	res.render('emptyNoti');
}

exports.profile = function(req, res){
	res.render('profile');
}
