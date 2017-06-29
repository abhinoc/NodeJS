// npm install connect

var connect = require('connect');
var http = require('http')

var app = connect();

function doFirst(request, response, next) {
    console.log("got request...");
    //next();
}

function doSecond(request, response, next) {
    console.log("got second request...");
    next();
    
}

app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8888);
console.log("Server is running....")