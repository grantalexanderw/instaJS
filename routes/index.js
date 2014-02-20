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