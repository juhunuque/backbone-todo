"use strict";

var http = require("http");
var express = require("express");

const app = express();

app.use(express.static("./public"));

app.get('/',function(req,res){
     res.sendFile('index.html');
});

const server = new http.Server(app);

const port = process.env.PORT || 3000;
server.listen(port, ()=>{
	console.log(`Backbone ToDo started on port ${port}`);
});
