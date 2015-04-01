var express = require('express');
var fs = require('fs');
var app = express();

app.get("/", function(req, res){
    fs.readFile(__dirname + "/index.html", function(err, html){
        res.send(html.toString());
    });
});

app.listen(process.env.PORT);