const express = require('express')
const calc = require ('./util/calculadora');
const app = express();

app.get('/hello', function(req, res){
    res.send("Welcome")
});

app.get('/ola', function(req, res){
    res.send("hello, world!");
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log('listening on', PORT);
});