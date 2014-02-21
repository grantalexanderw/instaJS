var eventdata = require("../brian1")



exports.eventsuccess = function(req, res){

	var eventTitle = req.body.title;

	var startdate = req.body.startmonth + ' ' + req.body.startdate + ' ' + req.body.startyear + ' ';
	var starttime = ' ' + req.body.starthour + ':' + req.body.startminute + ' ' + startampm;
	var startC = startdate.concat(starttime);

	var startdate = req.body.endmonth + ' ' + req.body.enddate + ' ' + req.body.endyear + ' ';
	var endtime = req.body.endhour + ':' + req.body.endminute + ' ' + endampm;
	var endC = startdate.concat(endtime);

	var newEvent = {
		'title': eventTitle,
		'start': startC,
		'end': endC
	};

	eventdata["brian1"].push(newEvent);


	res.render('eventsuccess', eventdata);
};