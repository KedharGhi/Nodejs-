const express = require('express')
const http = require('http');

var bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
//app.use(express.static('public'))
//app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})


app.post("/form", urlencodedParser, function(req, res){
	var username=req.body.username;
	var password=req.body.password;
	console.log(username);

	res.send("The Username and Password you posted: "+username +"Password:" +password);
});



app.use(function (req, res, next) {
  res.status(404).send("ERROR 404, Sorry Can't Find That Page!")
})

http.createServer(app).listen(3000);

