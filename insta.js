var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');

var app = express();

app.set('port', process.env.PORT || 8080);
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.welcome);
app.get('/index', index.view);
app.get('/forgot', index.forgot);
app.get('/friends', index.friends); 
app.get('/profile', index.profile);
app.get('/welcome', index.welcome);
app.get('/signin', index.signin);
app.get('/signup', index.signup);
app.get('/calendar', index.calendar);
app.get('/addevent', index.addevent);
app.get('/about', index.about);
app.get('/addfilter', index.addfilter);
app.get('/contactus', index.contactus);
app.get('/emptyNoti', index.emptyNoti);
app.get('/settings', index.settings);
app.get('/people', index.people);
app.get('/notifi', index.notifi);
app.get('/notfollowing', index.notfollowing);
app.get('/friendprofile', index.friendprofile);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});