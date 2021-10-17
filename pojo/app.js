var express= require("express");
var app=express();
var url = require("url");
app.set('view engine', 'ejs');


app.get("/*", function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
    name1 = pathname.substring(1)
    res.send("<h1>Hi "+ name1 + "</h1>")
}).listen(80);


console.log("Server Started at localhost:80");
