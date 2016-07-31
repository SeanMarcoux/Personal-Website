var express = require('express')
var app = express()
var path = require('path')
var react = require('react')
var reactDOM = require('react-dom')

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');

// used below code to render html files
app.engine('html', require('ejs').renderFile);
app.engine('php', require('ejs').renderFile);

app.set('view engine', 'ejs');
//app.use(express.favicon("public/img/favicon.ico"));
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
	//res.send("<p>hey</p>");
	//console.log(path.join(__dirname + '/project/schedulePage.php'));
	//res.render(__dirname + '/project/theScheduler.html');
	//res.render(__dirname + '/schedulePage.php');
	//react.createElement('stuff')
	reactDOM.render("<Main currentPage={3}/>");
});

app.listen(8080)