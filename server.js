var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + "/client"));

var people = [
    {name : "Larry"},
    {name : "Curly"},
    {name : "Moe"},
];

app.get("/api/people", function(req, res){
    res.send(people);
})

app.get("/", function(req, res){
    fs.readFile(__dirname + "/index.html", "utf8", function(err, html){
        res.send(html); //.toString());
    });
});

app.listen(process.env.PORT);