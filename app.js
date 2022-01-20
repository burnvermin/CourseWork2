const { appendFile } = require("fs");
var http = require("http");
var express = require ("express");
var app = express();
const port = 2000;

    const courses = [
        {'topic': 'math','location': 'Isreal','price': 200,},
        {'topic': 'English','location': 'Britan','price': 400,},
        {'topic': 'math','location': 'Isreal','price': 200,},
        {'topic': 'English','location': 'Britan','price': 400,},
        {'topic': 'math','location': 'Isreal','price': 200,},
        {'topic': 'English','location': 'Britan','price': 400,},
        {'topic': 'math','location': 'Isreal','price': 200,},
        {'topic': 'English','location': 'Britan','price': 400,},
        {'topic': 'math','location': 'Isreal','price': 200,},
    ] 
       const users = [
        {'email': 'user@emial.com', 'password': 'mypassword'},
        {'email': 'user@emial.com', 'password': 'mypassword'},
        {'email': 'user@emial.com', 'password': 'mypassword'},
        {'email': 'user@emial.com', 'password': 'mypassword'},
    ]
app.get ("/courses", function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end(JSON.stringify(courses))
});
app.get ("/users", function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end(JSON.stringify(users))
});
app.use (function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(404).end("Page not found")
});
app.listen(2000)