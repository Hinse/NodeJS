var express = require("express");
var http = require("http");
var app = express();

var fs = require("./test/fs");

app.get("/test/fs", function(req, res, next) {
    console.log("###");
    fs.get(req, res, next);
});

app.listen(3000, function(req, res, next) {
    console.log('App running on localhost:%d', this.address().port);
});