var data = require('../Frienddata.json');

exports.view = function(req, res){
	res.render('friends', data);
};