var express = require("express");
var app     = express();
var path    = require("path");

app.set('views', __dirname + '/views');

app.use(express.static('views'))
app.get('/', function(req,res){
  res.render(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(8080);
console.log("Running at Port 8080");
module.exports.getApp = app;
