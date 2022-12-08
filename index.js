// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/test.html");
// });



// // app.get("*", function (req, res) {
// //     console.log("error 404");
// // }

// app.get("*"  ,function(req, res){
//     res.sendFile("page not found")
// } ) 

// app.listen(3001, function () {
//     console.log("check localhost3001");
// });

// HTTP module

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8081);