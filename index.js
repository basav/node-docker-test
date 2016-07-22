"use strict";

var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

var client = redis.createClient('6379', 'redis');

app.get('/redis', function(req, res, next) {
    client.incr('counter', function(err, counter) {
        if(err) return next(err);
        res.send('This page has been viewed ' + counter + ' times!');
    });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
    console.log('Listening on port ' + (process.env.PORT || 8080));
});

module.exports.getApp = app;